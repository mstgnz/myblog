import Sidebar from '@/components/sidebar';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 flex flex-col gap-4 lg:gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 py-6 lg:py-12">
        <Sidebar />
        <div className="max-lg:order-1 max-lg:mb-12 lg:col-span-2">
          <h2 className="text-lg uppercase font-medium border-b border-dashed border-neutral-200 pb-2">
            Latest from Travelling
          </h2>
          {/* loop post */}
          <div className="flex flex-col">
            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/1.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#" className="text-2xl font-medium hover:text-neutral-800">
                  The Tourist Destination That You Must Visit While On Vacation In Bali
                </Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>

                <div className="relative">
                  <Link
                    href="blog-slug-1"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/2.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">Top 10 Must-Try Street Foods Around the World</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-2"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/3.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">How to Stay Productive While Traveling for Business</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-3"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/4.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">Master Photography: Tips for Capturing Stunning Moments</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-4"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/5.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">How to Work and Travel Successfully in the Digital Age</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-5"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/6.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">The Ultimate Guide to Solo Travel: Tips and Destinations</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-6"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/7.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">
                  The Art of Balancing Travel and Wellness: Tips for a Healthy Journey
                </Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-7"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>

            {/* post item */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 border-b border-dashed border-neutral-200 last:border-b-0">
              {/*thumbnail*/}
              <div className="relative">
                <Link href="#">
                  <img
                    src="/img/blogs/8.jpg"
                    alt="blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              {/*content*/}
              <div className="flex flex-col justify-between">
                {/*title*/}
                <Link href="#">Embracing a Leisurely Pace in a Fast-paced World</Link>
                <div className="flex items-center gap-4 mt-4">
                  {/*author*/}
                  <Link
                    href="#"
                    rel="author"
                    className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <i className="bi bi-person"></i>
                    <span>Jesicca Thomson</span>
                  </Link>
                  {/*date*/}
                  <span className="text-neutral-500">12 May, 2024</span>
                </div>
                {/*description*/}
                <p className="text-neutral-500 mt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since...
                </p>
                <div className="relative">
                  <Link
                    href="blog-slug-8"
                    className="mt-4 inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-800"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* navigation */}
          <div className="flex items-center justify-end gap-3 py-4 border-t border-dashed border-neutral-200">
            <Link
              className="uppercase text-neutral-500 hover:text-black flex items-center text-sm gap-2"
              href="#"
            >
              Older Posts <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
