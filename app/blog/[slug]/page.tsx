'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_BLOG_BY_SLUG, GET_COMMENTS } from '../../../schema/queries';
import { ADD_COMMENT } from '../../../schema/mutations';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ITEMS_PER_PAGE = 5;

export default function BlogDetail() {
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const [comment, setComment] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const { loading: blogLoading, error: blogError, data: blogData } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug },
  });

  const { loading: commentsLoading, error: commentsError, data: commentsData } = useQuery(
    GET_COMMENTS,
    {
      variables: { 
        blogId: blogData?.blogs[0]?.id, 
        limit: ITEMS_PER_PAGE,
        offset: ITEMS_PER_PAGE * (page - 1)
      },
      skip: !blogData?.blogs[0]?.id,
    }
  );

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      {
        query: GET_COMMENTS,
        variables: { 
          blogId: blogData?.blogs[0]?.id, 
          limit: ITEMS_PER_PAGE,
          offset: 0
        },
      },
    ],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment || !firstname || !lastname) return;

    try {
      await addComment({
        variables: {
          blogId: blogData.blogs[0].id,
          firstname,
          lastname,
          comment,
        },
      });
      setComment('');
      setFirstname('');
      setLastname('');
      setPage(1);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (blogLoading) return <div>Loading...</div>;
  if (blogError) return <div>Error: {blogError.message}</div>;
  if (!blogData?.blogs[0]) return <div>Blog not found</div>;

  const blog = blogData.blogs[0];
  const totalPages = Math.ceil(
    commentsData?.comments_aggregate?.aggregate?.count / ITEMS_PER_PAGE
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center mb-6 text-gray-600">
          <span>
            By {blog.user.firstname} {blog.user.lastname}
          </span>
          <span className="mx-2">•</span>
          {blog.category && (
            <Link
              href={`/category/${blog.category.id}`}
              className="text-blue-600 hover:underline"
            >
              {blog.category.parent
                ? `${blog.category.parent.name} > ${blog.category.name}`
                : blog.category.name}
            </Link>
          )}
          <span className="mx-2">•</span>
          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{blog.long_text}</ReactMarkdown>
        </div>
      </article>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border rounded p-2"
              required
            />
          </div>
          <textarea
            placeholder="Your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded p-2 mb-4"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Comment
          </button>
        </form>

        {commentsLoading ? (
          <div>Loading comments...</div>
        ) : commentsError ? (
          <div>Error loading comments: {commentsError.message}</div>
        ) : (
          <>
            <div className="space-y-4">
              {commentsData?.comments.map((comment: any) => (
                <div key={comment.id} className="border rounded p-4">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold">
                      {comment.firstname} {comment.lastname}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
} 