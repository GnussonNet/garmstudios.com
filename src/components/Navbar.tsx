import React, { useState, useEffect, useRef, RefObject } from "react";
import { Link } from "react-router-dom";
import NavIconButton from "./NavIconButton";
import NavLinkButton from "./NavLinkButton";
import DropdownToggler from "./DropdownToggler";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { useSocials } from "../hooks/sanity";
import { Social } from "../typings";

const Navbar = () => {
  const [navbarMenuToggle, setNavbarMenuToggle] = useState(false);
  const menuDropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const menuDropdownButtonRef: RefObject<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    // Bind a click event listener to the document
    document.addEventListener("click", handleClickOutsideMenu);

    // Return a cleanup function that unbinds the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  });

  function handleClickOutsideMenu(event: MouseEvent) {
    const menuDropdown = menuDropdownRef.current;
    const menuDropdownButton = menuDropdownButtonRef.current;

    if (menuDropdownButton && menuDropdownButton.contains(event.target as Node))
      return;

    if (menuDropdown && !menuDropdown.contains(event.target as Node)) {
      setNavbarMenuToggle(false);
    }
  }

  const socials = useSocials();

  return Array.isArray(socials) && socials.length ? (
    <nav className="fixed z-50 w-full border-gray-200 px-2 py-4 backdrop-blur-sm bg-[#00000]/90 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:flex-nowrap">
        <Link
          className="flex items-center rounded focus:outline-none focus:ring-4 focus:ring-white/20"
          to="/"
        >
          <span className="text-garm-gold self-center whitespace-nowrap text-xl font-semibold">
            Garm Studios
          </span>
        </Link>
        <div className="flex items-center gap-2 md:order-2">
          {socials &&
            socials.map((social: Social, index: number) => (
              <NavIconButton
                key={index}
                type="external"
                srOnly={social.name}
                icon={social.icon}
                href={social.url}
              />
            ))}

          <NavIconButton
            type="internal"
            href="/contact"
            srOnly="Contact"
            icon="Mail"
          />

          <div className="flex justify-center">
            <div>
              <div className="dropdown relative block xl:hidden">
                <Dropdown>
                  {socials &&
                    socials.map((social: Social, index: number) => (
                      <DropdownItem
                        key={index}
                        type="external"
                        title={social.name}
                        icon={social.icon}
                        href={social.url}
                      />
                    ))}
                  <hr className="my-2 h-0 border-2 border-t-0 border-solid border-white/40 opacity-25" />
                  <DropdownItem
                    type="internal"
                    title="Contact"
                    icon="Mail"
                    href="/contact"
                  />
                </Dropdown>
              </div>
            </div>
          </div>
          <DropdownToggler
            type="nav"
            ref={menuDropdownButtonRef}
            onClick={() => {
              setNavbarMenuToggle(!navbarMenuToggle);
            }}
            icon="Menu"
            srOnly="Open main meni"
          />
        </div>
        <div
          ref={menuDropdownRef}
          className={`${
            navbarMenuToggle ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-white/10 p-1 dark:border-gray-700 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:text-sm md:font-medium">
            <NavLinkButton title="Home" href="/" icon="Home" />
            <NavLinkButton title="About Us" href="/about" icon="Contact" />
            <NavLinkButton
              title="Portfolio"
              href="/portfolio"
              icon="Briefcase"
            />
            <NavLinkButton title="Services" href="/services" icon="Component" />
            <NavLinkButton title="Contact" href="/contact" icon="Mail" />
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;
