import React from 'react'
import logo from "../assets/garm.png"
import background from "../assets/background.png"
import { Send } from 'lucide-react'

const ContactView = () => {
  return (
    <section className="mt-20 md:mt-40 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className='text-center md:text-5xl text-3xl font-bold'>Get in touch with us</h1>
        <p className='text-center text-lg text-garm-blue-100 mt-1 md:mt-4'>Want to meet or just want have a chat? Send us a message<span className='block'>and we will reach out to you!</span></p>
      </div>
      <div className="lg:grid max-w-4xl mx-auto mt-12">

        <form action="#" className="mt-8 grid grid-cols-6 gap-6 md:gap-10">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="relative block overflow-hidden border-b pt-3 focus-within:border-garm-blue-200 border-garm-blue-600"
            >
              <input
                type="text"
                id="FirstName"
                placeholder="First Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
              />

              <span
                className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-200"
              >
                First Name
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="relative block overflow-hidden border-b pt-3 focus-within:border-garm-blue-200 border-garm-blue-600"
            >
              <input
                type="text"
                id="LastName"
                placeholder="Last Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
              />

              <span
                className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-200"
              >
                Last Name
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Email"
              className="relative block overflow-hidden border-b pt-3 focus-within:border-garm-blue-200 border-garm-blue-600"
            >
              <input
                type="email"
                id="Email"
                placeholder="Email Address"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
              />

              <span
                className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-200"
              >
                Email Address
              </span>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Phone"
              className="relative block overflow-hidden border-b pt-3 focus-within:border-garm-blue-200 border-garm-blue-600"
            >
              <input
                type="tel"
                id="Phone"
                placeholder="Phone Number"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
              />

              <span
                className="absolute left-0 top-2 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-200"
              >
                Phone Number
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Message"
              className="relative block overflow-hidden border-b pt-3 focus-within:border-garm-blue-200 border-garm-blue-600"
            >
              <textarea
                id="Message"
                placeholder="Message"
                rows={4}
                className="peer w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
              />

              <span
                className="absolute left-0 top-2 -translate-y-3 text-xs transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs text-gray-200"
              >
                Message
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md  shadow-sm bg-gray-800 accent-garm-blue-600 focus:outline-none focus:ring-2 focus:ring-garm-blue-600"
              />

              <span className="text-sm text-gray-200">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="flex gap-2 justify-center w-full items-center rounded-md bg-garm-blue-200 px-5 py-3 text-sm font-medium text-black transition hover:bg-garm-blue-100 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
            >
              <Send className="w-5 h-5" />
              <p>
                Send messeage
              </p>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactView