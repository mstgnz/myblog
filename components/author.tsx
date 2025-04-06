import React from 'react';
import Link from 'next/link';

const Author = () => {
  return (
    <div className="text-center border-b border-dashed border-neutral-200">
      <div className="max-w-2xl mx-auto py-12 px-6">
        <img
          src="src/img/personal/avatar.jpeg"
          alt="avatar"
          className="size-24 rounded-full mb-2 mx-auto"
        />
        <h2 className="text-2xl lg:text-3xl font-medium mb-6">Jesicca Thomson</h2>
        <div className="relative max-w-[150px] mx-auto mb-6">
          <div className="h-1 border-b-2 border-dashed border-neutral-200 w-full"></div>
          <div className="absolute end-1/2 translate-x-2.5 -top-2.5 size-6 rounded-full bg-neutral-100 border-2 border-dashed border-neutral-200"></div>
        </div>
        <p className="text-lg text-neutral-500 mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since
        </p>
        <div className="flex justify-center items-center">
          <Link href="#" className="p-2 hover:opacity-80">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="p-2 hover:opacity-80">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="p-2 hover:opacity-80">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="#" className="p-2 hover:opacity-80">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link href="#" className="p-2 hover:opacity-80">
            <i className="bi bi-tiktok"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
