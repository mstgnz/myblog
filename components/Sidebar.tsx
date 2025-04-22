import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="max-lg:order-2 lg:col-span-1 lg:pe-6">
      <div className="flex flex-col gap-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-medium mb-6">About Me</h3>
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="flex items-center gap-3 justify-between py-1.5 hover:text-black"
            >
              <span>Home</span>
              <FaChevronRight size={16} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 justify-between py-1.5 hover:text-black"
            >
              <span>About</span>
              <FaChevronRight size={16} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 justify-between py-1.5 hover:text-black"
            >
              <span>Contact</span>
              <FaChevronRight size={16} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 justify-between py-1.5 hover:text-black"
            >
              <span>Term Of Use</span>
              <FaChevronRight size={16} />
            </Link>
            <Link
              href="/auth"
              className="flex items-center gap-3 justify-between py-1.5 hover:text-black"
            >
              <span>Login / Register</span>
              <FaUserCircle size={16} />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-medium mb-6">Recent Posts</h3>
          <div className="flex flex-col">
            <Link
              href="#"
              className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
            >
              <img src="/img/blogs/2.jpg" alt="image" className="size-16" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm capitalize hover:text-black">
                  The Tourist Destination That You Must Visit ...
                </h4>
                <span className="text-neutral-500 text-sm">12 May, 2024</span>
              </div>
            </Link>

            <Link
              href="#"
              className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
            >
              <img src="/img/blogs/8.jpg" alt="image" className="size-16" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm capitalize hover:text-black">
                  Embracing A Leisurely Pace In A ...
                </h4>
                <span className="text-neutral-500 text-sm">12 May, 2024</span>
              </div>
            </Link>

            <Link
              href="#"
              className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
            >
              <img src="/img/blogs/6.jpg" alt="image" className="size-16" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm capitalize hover:text-black">
                  How To Work And Travel Successfully In The ...
                </h4>
                <span className="text-neutral-500 text-sm">12 May, 2024</span>
              </div>
            </Link>

            <Link
              href="#"
              className="flex gap-2 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
            >
              <img src="/img/blogs/4.jpg" alt="image" className="size-16" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm capitalize hover:text-black">
                  Master Photography: Tips For Capturing Stunning Moments
                </h4>
                <span className="text-neutral-500 text-sm">12 May, 2024</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-medium mb-6">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              travel
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              food
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              review
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              vlog
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              product
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              lifestyle
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              health
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              tips
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              work
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              hobby
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              DIY
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              tech
            </Link>
            <Link
              href="#"
              className="flex py-1 px-3 bg-white hover:bg-neutral-100 border border-neutral-200"
            >
              AI
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
