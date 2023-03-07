import React from "react";
import { Send } from "lucide-react";

const ContactView = () => {
  return (
    <section className="mx-auto mt-28 max-w-screen-xl px-4 sm:px-6 md:mt-48 lg:px-8">
      <div>
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          Get in <span className="text-garm-blue-100">touch</span> with us
        </h1>
        <p className="mt-1 text-center text-lg text-garm-blue-100 md:mt-4">
          Want to meet or just want have a chat? Send us a message
          <span className="block">and we will reach out to you!</span>
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl lg:grid">
        <form action="#" className="mt-8 grid grid-cols-6 gap-6 md:gap-10">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="relative block overflow-hidden border-b border-garm-blue-600 pt-3 focus-within:border-garm-blue-200"
            >
              <input
                type="text"
                id="FirstName"
                placeholder="First Name"
                className="peer h-8 w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                First Name
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="relative block overflow-hidden border-b border-garm-blue-600 pt-3 focus-within:border-garm-blue-200"
            >
              <input
                type="text"
                id="LastName"
                placeholder="Last Name"
                className="peer h-8 w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Last Name
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Email"
              className="relative block overflow-hidden border-b border-garm-blue-600 pt-3 focus-within:border-garm-blue-200"
            >
              <input
                type="email"
                id="Email"
                placeholder="Email Address"
                className="peer h-8 w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email Address
              </span>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Phone"
              className="relative block overflow-hidden border-b border-garm-blue-600 pt-3 focus-within:border-garm-blue-200"
            >
              <input
                type="tel"
                id="Phone"
                placeholder="Phone Number"
                className="peer h-8 w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Phone Number
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Message"
              className="relative block overflow-hidden border-b border-garm-blue-600 pt-3 focus-within:border-garm-blue-200"
            >
              <textarea
                id="Message"
                placeholder="Message"
                rows={4}
                className="peer w-full border-none bg-transparent p-0 text-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute left-0 top-2 -translate-y-3 text-xs text-gray-200 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Message
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="MarketingAccept"
              className="flex items-center gap-4"
            >
              <input
                id="MarketingAccept"
                name="marketing_accept"
                type="checkbox"
                value=""
                className="accent-garm-200 h-5 w-5 rounded border-garm-blue-200 bg-garm-blue-200 text-garm-blue-200 ring-offset-garm-blue-600 focus:ring-2 focus:ring-garm-blue-600"
              />
              <span className="text-sm text-gray-200">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-garm-blue-200 px-5 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-garm-blue-100 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-garm-blue-600">
              <Send className="h-5 w-5" />
              <p>Send messeage</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactView;
