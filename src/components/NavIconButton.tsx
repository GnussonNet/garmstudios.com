import React from "react";
import * as icons from "lucide-react";
import { Link } from "react-router-dom";

const NavIconButton = ({
  type,
  href,
  srOnly,
  icon,
}: {
  type: "internal" | "external";
  href: string;
  srOnly: string;
  icon: keyof Omit<typeof icons, "createReactComponent">;
}) => {
  const LucideIcon = icons[icon];

  return type === "internal" ? (
    <Link
      to={href}
      className="hidden rounded-lg p-2.5 text-sm text-gray-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:block md:hidden xl:block hover:text-garm-gold"
    >
      <span className="sr-only">{srOnly}</span>
      <LucideIcon className="h-6 w-6" />
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hidden rounded-lg p-2.5 text-sm text-gray-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:block md:hidden xl:block hover:text-garm-gold"
    >
      <span className="sr-only">{srOnly}</span>
      <LucideIcon className="h-6 w-6" />
    </a>
  );
};

export default NavIconButton;
