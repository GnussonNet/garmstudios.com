import { Link, useLocation } from "react-router-dom";
import React, { RefObject, useEffect, useRef, useState } from "react";
import logo from "../assets/garm.png"
import { Circle, Instagram, Linkedin, Mail, Menu, X } from "lucide-react";


const Navbar = () => {
  const [navbarMenuToggle, setNavbarMenuToggle] = useState(false);
  const menuDropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const menuDropdownButtonRef: RefObject<HTMLButtonElement> = useRef(null);
  const menuDropdownItemRef: RefObject<HTMLAnchorElement> = useRef(null);

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    // Bind a click event listener to the document
    document.addEventListener("click", handleClickOutsideMenu);
    window.addEventListener('scroll', handleScroll, { passive: true });


    // Return a cleanup function that unbinds the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    console.log(navbarMenuToggle)

  }, [navbarMenuToggle])


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  function handleClickOutsideMenu(event: MouseEvent) {
    const menuDropdown = menuDropdownRef.current;
    const menuDropdownButton = menuDropdownButtonRef.current;

    if (menuDropdownButton && menuDropdownButton.contains(event.target as Node))
      return;

    // The click occurred outside the dropdown menu, so close the menu
    if (menuDropdown && !menuDropdown.contains(event.target as Node)) {
      setNavbarMenuToggle(false);
    }
  }

  return (
    <header aria-label="Site Header" className={`${scrollPosition > 100 && "bg-garm-blue-900/90 backdrop-blur-sm"} transition-colors fixed z-10 w-full`}>
      {/* <header aria-label="Site Header" className="bg-garm-blue-900 fixed z-10 w-full"> */}
      <div
        className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        <Link className="block p-2 focus:outline-none focus:ring-4 rounded-md focus:ring-garm-blue-600" to="/">
          <img src={logo} className="w-12" alt="logo" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav ref={menuDropdownRef} aria-label="Site Nav" className={`${navbarMenuToggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} fixed ease-in-out transition-all duration-300 right-0 inset-y-0 left-1/4 md:translate-x-0 md:opacity-100 md:block md:static`}>
            <ul className="relative flex flex-col items-center justify-center gap-6 bg-garm-blue-900/90 backdrop-blur-sm h-screen md:bg-transparent md:backdrop-blur-none md:h-auto md:flex-row md:text-md">
              <li>
                <Link
                  ref={menuDropdownItemRef}
                  className={`transition font-medium focus:outline-none focus:ring-4 rounded-md focus:ring-garm-blue-600 p-2 ${currentRoute === "/" ? "text-garm-gold-500" : "text-white/75 hover:text-garm-gold-500 md:hover:text-white"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  ref={menuDropdownItemRef}
                  className={`transition font-medium focus:outline-none focus:ring-4 rounded-md focus:ring-garm-blue-600 p-2 ${currentRoute === "/about" ? "text-garm-gold-500" : "text-white/75 hover:text-garm-gold-500 md:hover:text-white"}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  ref={menuDropdownItemRef}
                  className={`transition font-medium focus:outline-none focus:ring-4 rounded-md focus:ring-garm-blue-600 p-2 ${currentRoute === "/services" ? "text-garm-gold-500" : "text-white/75 hover:text-garm-gold-500 md:hover:text-white"}`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  ref={menuDropdownItemRef}
                  className={`transition font-medium focus:outline-none focus:ring-4 rounded-md focus:ring-garm-blue-600 p-2 ${currentRoute === "/portfolio" ? "text-garm-gold-500" : "text-white/75 hover:text-garm-gold-500 md:hover:text-white"}`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-10">
            <div className="sm:flex items-center sm:gap-4">
              <div className="hidden md:flex items-center gap-4">
                <Link className="p-2 text-black rounded-full bg-garm-blue-200 focus:outline-none focus:ring-4 focus:ring-garm-blue-600" to="https://linkedin.com">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link className="p-2 text-black rounded-full bg-garm-blue-200 focus:outline-none focus:ring-4 focus:ring-garm-blue-600" to="https://instagram.com">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Circle className="fill-garm-blue-100 stroke-none w-2 h-2" />
              </div>
              <Link
                className="flex gap-2 items-center rounded-md bg-garm-gold-700 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-garm-gold-500 focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
                to="/"
              >
                <Mail className="w-5 h-5" />
                <p className="hidden xs:block md:hidden lg:block">
                  Send us a messeage
                </p>
                <p className="block xs:hidden md:block lg:hidden">
                  Contact
                </p>
              </Link>
            </div>

            <button
              ref={menuDropdownButtonRef}
              onClick={() => setNavbarMenuToggle(!navbarMenuToggle)}
              className="block rounded p-1 text-white/80 transition hover:text-white dark:text-white md:hidden focus:outline-none focus:ring-4 focus:ring-garm-blue-600"
            >
              <>
                {navbarMenuToggle === false ? <Menu className="h-7 w-7 pointer-events-none" /> : <X className="h-7 w-7 pointer-events-none" />}
                <span className="sr-only">Toggle menu</span>
              </>
            </button>
          </div>

        </div>
      </div >
    </header >
  )
};

export default Navbar;
