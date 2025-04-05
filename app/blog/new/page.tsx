'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_BLOG } from '../../../schema/mutations';
import { GET_CATEGORIES } from '../../../schema/queries';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewBlog() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [shortText, setShortText] = useState('');
  const [longText, setLongText] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery(GET_CATEGORIES);
  const [addBlog] = useMutation(ADD_BLOG);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !shortText || !longText || !categoryId) return;

    setIsSubmitting(true);
    try {
      const slug = title.toLowerCase().replace(/\s+/g, '-');
      await addBlog({
        variables: {
          title,
          short_text: shortText,
          long_text: longText,
          category_id: categoryId,
          slug,
        },
      });
      router.push('/');
    } catch (error) {
      console.error('Error adding blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCategoryOptions = (categories: any[], level = 0) => {
    return categories.map((category) => (
      <option key={category.id} value={category.id}>
        {'\u00A0'.repeat(level * 2)} {category.name}
      </option>
    ));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="shortText" className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            id="shortText"
            value={shortText}
            onChange={(e) => setShortText(e.target.value)}
            className="w-full border rounded p-2"
            rows={3}
            required
          />
        </div>

        <div>
          <label htmlFor="longText" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <ReactQuill
            value={longText}
            onChange={setLongText}
            className="h-64 mb-12"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select a category</option>
            {categoriesLoading ? (
              <option disabled>Loading categories...</option>
            ) : categoriesError ? (
              <option disabled>Error loading categories</option>
            ) : (
              renderCategoryOptions(categoriesData.categories)
            )}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </main>
  );
} 