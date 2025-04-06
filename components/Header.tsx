'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { X, Menu, Search } from 'lucide-react';

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="flex flex-col">
        <div className="sticky top-0 z-50 bg-white">
          <div className="container xl:max-w-6xl mx-auto px-4 flex items-center gap-3 justify-between md:justify-center">
            <button
              onClick={() => setNavToggle(!navToggle)}
              className="size-10 text-2xl block md:hidden z-50"
            >
              {navToggle ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/" className="py-4 md:py-6 lg:py-12">
              <h2 className="text-4xl md:text-5xl font-medium">My BLOG</h2>
            </Link>

            <button
              onClick={() => setSearchToggle(!searchToggle)}
              className="size-10 text-xl block md:hidden z-50"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        <nav
          id="target-nav"
          className={`fixed md:static md:block w-72 md:w-auto h-full md:h-auto inset-y-0 left-0 ${
            navToggle ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 bg-white md:border-y border-dashed border-neutral-200 z-40 transition-transform duration-300`}
        >
          <div className="md:hidden py-2 text-center text-neutral-500 text-xs uppercase border-b border-neutral-100 mb-1.5">
            Menu
          </div>
          <ul className="relative flex md:items-center md:justify-center max-md:flex-col max-md:h-full max-md:overflow-auto text-sm md:text-base uppercase">
            <li className="relative">
              <Link
                href="/"
                className="py-2 px-4 flex max-md:justify-between gap-2 [&.active]:text-black [&.active]:bg-neutral-100 hover:text-black hover:bg-neutral-100"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/about"
                className="py-2 px-4 flex max-md:justify-between gap-2 [&.active]:text-black [&.active]:bg-neutral-100 hover:text-black hover:bg-neutral-100"
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/contact"
                className="py-2 px-4 flex max-md:justify-between gap-2 [&.active]:text-black [&.active]:bg-neutral-100 hover:text-black hover:bg-neutral-100"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-0 inset-x-0 md:hidden py-2 text-center text-neutral-500 text-xs mb-2">
            Copyright 2024
          </div>
        </nav>

        <button
          onClick={() => setNavToggle(!navToggle)}
          className={`max-md:fixed max-md:bg-black max-md:${
            navToggle ? 'show inset-0 opacity-50 z-30' : 'opacity-0'
          } transform duration-300 lg:hidden`}
        ></button>

        {searchToggle && (
          <div className="z-[60] overflow-auto inset-0 w-full h-full fixed py-6">
            <div
              className="z-[60] relative p-3 mx-auto my-0 max-w-full sm:max-w-[500px] opacity-100"
              onClick={() => setSearchToggle(false)}
            >
              <div className="bg-white rounded border border-neutral-200 flex flex-col overflow-hidden">
                <div className="p-6 flex flex-col">
                  <div className="flex justify-between gap-3 items-center mb-3">
                    <h3 className="text-lg">Search</h3>
                    <button
                      onClick={() => setSearchToggle(false)}
                      className="fill-current text-2xl font-semibold"
                    >
                      ×
                    </button>
                  </div>
                  <div className="max-w-full w-full flex relative overflow-hidden mb-8">
                    <label htmlFor="search-form" className="hidden">
                      Search
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0 peer"
                      id="search-form"
                    />
                    <button className="size-12 flex justify-center items-center absolute end-0 top-0 border border-neutral-200 bg-neutral-100 peer-focus:border-neutral-400">
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-40 overflow-auto inset-0 w-full h-full fixed bg-black opacity-50"></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
