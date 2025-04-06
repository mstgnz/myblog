import React from 'react';
import Link from 'next/link';
const Comment = () => {
  return (
    <div id="comments" className="py-6 md:py-8">
      {/*title*/}
      <h3 className="text-xl w-full mb-6">5 Comments</h3>

      {/*comment list*/}
      <ol className="mb-6">
        <li className="relative">
          <div className="pb-4 border-b border-neutral-200 border-dashed">
            <footer>
              <img
                className="size-16 border border-dashed border-neutral-200 max-w-full float-left mr-4"
                src="/img/personal/avatar2.jpg"
                alt="avatar"
              />
              <div>
                <Link className="text-lg leading-normal font-medium mb-2" href="#" target="_blank">
                  Robert Villa
                </Link>
                <span className="md:float-right text-sm">
                  <time dateTime="2020-10-27">May 27, 2024</time>
                </span>
              </div>
            </footer>
            <div>
              <p className="text-neutral-500">
                I like this themes, fast loading and look profesional
              </p>
            </div>
            <div>
              <Link className="text-orange-700 hover:text-orange-800" href="#comment-form">
                Reply
              </Link>
            </div>
          </div>
          <ul className="ms-12 md:ms-24">
            <li className="py-4">
              <div className="pb-4 border-b border-neutral-200 border-dashed">
                <footer>
                  <img
                    className="size-16 border border-dashed border-neutral-200 max-w-full float-left mr-4"
                    src="/img/personal/avatar.jpeg"
                    alt="avatar"
                  />
                  <div>
                    <Link
                      className="text-lg leading-normal font-medium mb-2"
                      href="#"
                      target="_blank"
                    >
                      Jesicca Thomson
                    </Link>
                    <span className="md:float-right text-sm">
                      <time dateTime="2020-10-27">May 27, 2024</time>
                    </span>
                  </div>
                </footer>
                <div>
                  <p className="text-neutral-500">Thank you Robert!</p>
                </div>
                <div>
                  <Link className="text-orange-700 hover:text-orange-800" href="#comment-form">
                    Reply
                  </Link>
                </div>
              </div>
              <ul className="md:ms-24">
                <li className="py-4" id="comment-5">
                  <div className="pb-4 border-b border-neutral-200 border-dashed">
                    <footer>
                      <img
                        className="size-16 border border-dashed border-neutral-200 max-w-full float-left mr-4"
                        src="/img/personal/avatar2.jpg"
                        alt="avatar"
                      />
                      <div>
                        <Link
                          className="text-lg leading-normal font-medium mb-2"
                          href="#"
                          target="_blank"
                        >
                          Robert Villa
                        </Link>
                        <span className="md:float-right text-sm">
                          <time dateTime="2020-10-27">May 27, 2024</time>
                        </span>
                      </div>
                    </footer>
                    <div>
                      <p className="text-neutral-500">You're welcome!</p>
                    </div>
                    <div>
                      <Link className="text-orange-700 hover:text-orange-800" href="#comment-form">
                        Reply
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="relative">
          <div className="pb-4 border-b border-neutral-200 border-dashed">
            <footer>
              <img
                className="size-16 border border-dashed border-neutral-200 max-w-full float-left mr-4"
                src="/img/personal/avatar.jpeg"
                alt="avatar"
              />
              <div>
                <Link className="text-lg leading-normal font-medium mb-2" href="#" target="_blank">
                  Jesicca Thomson
                </Link>
                <span className="md:float-right text-sm">
                  <time dateTime="2020-10-27">May 27, 2024</time>
                </span>
              </div>
            </footer>
            <div>
              <p className="text-neutral-500">Please support me with give positive rating!</p>
            </div>
            <div>
              <Link className="text-orange-700 hover:text-orange-800" href="#comment-form">
                Reply
              </Link>
            </div>
          </div>
          <ul className="ms-12 md:ms-24">
            <li className="py-4">
              <div className="pb-4 border-b border-neutral-200 border-dashed">
                <footer>
                  <img
                    className="size-16 border border-dashed border-neutral-200 max-w-full float-left mr-4"
                    src="/img/personal/avatar2.jpg"
                    alt="avatar"
                  />
                  <div>
                    <Link
                      className="text-lg leading-normal font-medium mb-2"
                      href="#"
                      target="_blank"
                    >
                      Robert Villa
                    </Link>
                    <span className="md:float-right text-sm">
                      <time dateTime="2020-10-27">May 27, 2024</time>
                    </span>
                  </div>
                </footer>
                <div>
                  <p className="text-neutral-500">Yes Sure!</p>
                </div>
                <div>
                  <Link className="text-orange-700 hover:text-orange-800" href="#comment-form">
                    Reply
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ol>

      {/*comment form*/}
      <div id="comment-form">
        <h4 className="text-xl leading-normal mb-2">LEAVE A REPLY</h4>
        <p className="mb-6">Your email address will not be published</p>
        <div>
          <form action="#" noValidate>
            <div className="mt-2"></div>
            <div className="mb-6">
              <textarea
                className="w-full leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0"
                placeholder="Comment"
                aria-label="insert comment"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <input
                className="w-full leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0"
                placeholder="Name"
                aria-label="name"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0"
                placeholder="Email"
                aria-label="email"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0"
                placeholder="Website:"
                aria-label="website"
                type="text"
              />
            </div>
            <div className="mb-6">
              <div>
                <input
                  className="form-checkbox h-5 w-5 text-orange-500 border border-neutral-100 focus:outline-none accent-orange-500"
                  id="comment-cookies"
                  name="comment-cookies"
                  type="checkbox"
                  value="yes"
                />
                <label className="ms-2" htmlFor="comment-cookies">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center py-3 px-5 leading-5 text-neutral-100 bg-black hover:text-white hover:bg-neutral-900 hover:ring-0 focus:outline-none focus:ring-0"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
