import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/garm.png";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#0F2C3E] ">
      <div className="mx-auto mt-28 max-w-screen-xl space-y-8 px-4 pb-10 sm:px-6 md:mt-48 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <img src={logo} className="h-12" alt="Logo" />
            <p className="text-md font-semibold text-garm-gold-500">
              GARM Studios AB
            </p>
          </div>

          <ul className="mt-8 flex justify-start gap-4 sm:mt-0 sm:justify-end">
            <li className="flex items-center">
              <Link
                className="rounded-md p-1 text-gray-200 transition hover:scale-105 hover:opacity-75 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                to="https://linkedin.com"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </li>

            <li className="flex items-center">
              <Link
                className="rounded-md p-1 text-gray-200 transition hover:scale-105 hover:opacity-75 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                to="https://instagram.com"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-garm-blue-600 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-garm-gold-500">Services</p>

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Company Review
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
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
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
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
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
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
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Accessibility
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Returns Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="rounded-md p-1 text-[#A3C3D0] transition hover:opacity-75 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                  >
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="text-xs text-[#A3C3D0]">
          &copy; {new Date().getFullYear()}. GARM Studios AB. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
