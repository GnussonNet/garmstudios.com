import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as icons from "lucide-react";

const NavLinkButton = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: keyof Omit<typeof icons, "createReactComponent">;
}) => {
  const LucideIcon = icons[icon];

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <li>
      <NavLink
        to={href}
        className={`flex items-center gap-2 rounded p-2.5 focus:outline-none font-medium focus:ring-4 hover:text-garm-gold hover:bg-white/20 focus:ring-white/20 ${
          currentRoute === href ? "text-garm-gold" : "text-gray-300"
        }`}
      >
        <LucideIcon className="h-5 w-5" />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default NavLinkButton;
