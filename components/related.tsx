import Link from 'next/link';
import React from 'react';

const Related = () => {
  return (
    <div className="py-6 md:py-8 border-b border-dashed border-neutral-200">
      <h3 className="text-xl w-full">Related Article</h3>
      <div className="pt-2 flex flex-col">
        {/* item */}
        <Link
          href="#"
          className="flex gap-3 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
        >
          <img src="/img/blogs/8.jpg" alt="image" className="size-16" />
          <div className="flex flex-col gap-1">
            <h4 className="capitalize hover:text-black">
              Embracing A Leisurely Pace In A Fast-Paced ...
            </h4>
            <span className="text-neutral-500 text-sm">12 May, 2024</span>
          </div>
        </Link>
        {/* item */}
        <Link
          href="#"
          className="flex gap-3 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
        >
          <img src="/img/blogs/2.jpg" alt="image" className="size-16" />
          <div className="flex flex-col gap-1">
            <h4 className="capitalize hover:text-black">
              How To Stay Productive While Traveling For ...
            </h4>
            <span className="text-neutral-500 text-sm">12 May, 2024</span>
          </div>
        </Link>
        {/* item */}
        <Link
          href="#"
          className="flex gap-3 py-3 border-b border-dashed last:border-b-0 border-neutral-200"
        >
          <img src="/img/blogs/5.jpg" alt="image" className="size-16" />
          <div className="flex flex-col gap-1">
            <h4 className="capitalize hover:text-black">
              Master Photography: Tips For Capturing ...
            </h4>
            <span className="text-neutral-500 text-sm">12 May, 2024</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Related;
