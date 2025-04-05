'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS, GET_CATEGORIES } from '../../../schema/queries';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ITEMS_PER_PAGE = 10;

export default function CategoryPage() {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const { loading: blogsLoading, error: blogsError, data: blogsData } = useQuery(GET_BLOGS, {
    variables: { 
      page, 
      pageSize: ITEMS_PER_PAGE,
      categoryId: id 
    },
  });

  const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery(
    GET_CATEGORIES
  );

  if (blogsLoading || categoriesLoading) return <div>Loading...</div>;
  if (blogsError) return <div>Error: {blogsError.message}</div>;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  const category = categoriesData.categories.find((cat: any) => cat.id === id);
  if (!category) return <div>Category not found</div>;

  const totalPages = Math.ceil(blogsData.blogs_aggregate.aggregate.count / ITEMS_PER_PAGE);

  const getCategoryPath = (category: any): string[] => {
    const path: string[] = [category.name];
    let current = category;
    while (current.parent) {
      path.unshift(current.parent.name);
      current = current.parent;
    }
    return path;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <div className="text-gray-600">
          {getCategoryPath(category).join(' > ')}
        </div>
      </div>

      <div className="grid gap-6">
        {blogsData.blogs.map((blog: any) => (
          <article key={blog.id} className="border rounded-lg p-6">
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            </Link>
            <p className="text-gray-600 mb-4">{blog.short_text}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  By {blog.user.firstname} {blog.user.lastname}
                </span>
                {blog.category && (
                  <span className="text-sm text-blue-600">
                    {blog.category.parent
                      ? `${blog.category.parent.name} > ${blog.category.name}`
                      : blog.category.name}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {new Date(blog.created_at).toLocaleDateString()}
              </span>
            </div>
          </article>
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
    </main>
  );
} 