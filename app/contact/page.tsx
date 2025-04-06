import React from 'react';

const ContactPage = () => {
  return (
    <div className="container xl:max-w-6xl mx-auto px-4 flex flex-col gap-4 lg:gap-6">
      {/* layout */}
      <div className="grid grid-cols-1 gap-4 lg:gap-6 py-6">
        {/* sidebar */}

        <div className="max-lg:order-1 max-lg:mb-12 lg:col-span-2 py-4">
          <h1 className="text-2xl md:text-3xl font-medium border-b border-dashed border-neutral-200 pb-3">
            Contact Us
          </h1>
          {/* post */}
          <div className="relative post-content pt-4">
            <p>
              Thank you for your interest in reaching out to us! At [Company Name], we value your
              feedback, inquiries, and any other communication you may have. Whether you have
              questions about our products, services, or would simply like to provide suggestions,
              our dedicated team is here to assist you.
            </p>

            <p>Feel free to get in touch with us through the following channels:</p>

            <div className="flex flex-col gap-1 mb-12">
              <div>
                <i className="bi bi-envelope"></i>: Support@mail.com
              </div>
              <div>
                <i className="bi bi-telephone"></i>: (+123) 456 7890
              </div>
              <div>
                <i className="bi bi-whatsapp"></i>: (+123) 456 7890
              </div>
              <div>
                <i className="bi bi-skype"></i>: Support@mail.com
              </div>
            </div>

            <div id="comment-form">
              <h4 className="text-xl leading-normal mb-2">Send Message</h4>
              <p className="mb-6">
                We strive to respond to all emails promptly and ensure that your questions are
                answered thoroughly.
              </p>
              <div>
                <form action="#" noValidate>
                  <div className="mt-2"></div>
                  <div className="mb-6">
                    <textarea
                      className="w-full leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0"
                      placeholder="Message"
                      aria-label="insert comment"
                      rows={4}
                      required
                    />
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
                  <button
                    type="submit"
                    className="flex items-center py-3 px-5 leading-5 text-neutral-100 bg-black hover:text-white hover:bg-neutral-900 hover:ring-0 focus:outline-none focus:ring-0"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* navigation */}
          <div className="flex items-center justify-end gap-3 py-4 border-t border-dashed border-neutral-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
