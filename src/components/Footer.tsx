import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import logo from "../assets/garm.png"

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#0F2C3E] ">
      <div
        className="max-w-screen-xl px-4 pb-10 mt-20 md:mt-40 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
      >
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <img src={logo} className="h-12" alt="Logo" />
            <p className='text-garm-gold-500 text-md font-semibold'>GARM Studios AB</p>
          </div>

          <ul className="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIn</span>

                <Linkedin
                  className="w-6 h-6"
                />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md"
              >
                <span className="sr-only">Instagram</span>

                <Instagram
                  className="w-6 h-6"
                />
              </a>
            </li>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 gap-8 pt-8 border-t border-garm-blue-600 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
        >
          <div>
            <p className="font-medium text-garm-gold-500">Services</p>

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Company Review
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-garm-gold-500">Company</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Accounts Review
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-garm-gold-500">Helpfull Links</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-garm-gold-500">Legal</p>

            <nav aria-label="Footer Navigation - Legal" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Accessibility
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Returns Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600 rounded-md p-1"
                  >
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="text-xs text-[#A3C3D0]">
          &copy; {new Date().getFullYear()}. GARM Studios AB. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer