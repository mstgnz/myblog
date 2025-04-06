import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-50">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-6">About Us</h3>
            <address className="not-italic text-neutral-500">
              <p>123 Blog Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <div className="flex flex-col">
              <Link
                href="#"
                className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                <i className="bi bi-chevron-right"></i>
                <span>Home</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                <i className="bi bi-chevron-right"></i>
                <span>About</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                <i className="bi bi-chevron-right"></i>
                <span>Contact</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-6">Categories</h3>
            <div className="flex flex-col">
              <Link
                href="#"
                className="py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                Travel
              </Link>
              <Link
                href="#"
                className="py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                Food
              </Link>
              <Link
                href="#"
                className="py-3 border-b border-dashed last:border-b-0 border-neutral-200"
              >
                Lifestyle
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-6">Newsletter</h3>
            <p className="text-neutral-500 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-neutral-200 rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Link href="#" className="first:ps-0 py-2 px-4 hover:text-black">
                Home
              </Link>
              <Link href="#" className="first:ps-0 py-2 px-4 hover:text-black">
                About
              </Link>
              <Link href="#" className="first:ps-0 py-2 px-4 hover:text-black">
                Contact
              </Link>
              <Link href="#" className="first:ps-0 py-2 px-4 hover:text-black">
                Term Of Use
              </Link>
            </div>
            <p className="text-neutral-500">
              Copyright © 2025 | Powered by{' '}
              <Link href="https://github.com/mstgnz" target="_blank" rel="noopener noreferrer">
                Mesut GENEZ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
