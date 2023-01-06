import React from "react";
import { Link } from "react-router-dom";
import * as icons from "lucide-react";

const DropdownItem = ({
  type,
  href,
  title,
  icon,
}: {
  type: "internal" | "external";
  href: string;
  title: string;
  icon: keyof Omit<typeof icons, "createReactComponent">;
}) => {
  const LucideIcon = icons[icon];

  const classes =
    "flex items-center gap-2 p-2.5 text-md font-medium text-gray-300 hover:bg-white/20 focus:outline-none";

  return type === "internal" ? (
    <li>
      <Link to={href} className={classes}>
        <LucideIcon className="h-5 w-5" />
        <span>{title}</span>
      </Link>
    </li>
  ) : (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        <LucideIcon className="h-5 w-5" />
        <span>{title}</span>
      </a>
    </li>
  );
};

export default DropdownItem;
