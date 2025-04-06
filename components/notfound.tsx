import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6">
      <h1 className="text-6xl font-bold text-neutral-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-neutral-600 mb-8">Page Not Found</h2>
      <p className="text-neutral-500 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link href="/" className="px-6 py-3 bg-black text-white rounded hover:bg-neutral-800">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
