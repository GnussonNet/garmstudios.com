import React, { forwardRef } from "react";
import * as icons from "lucide-react";

interface DropDownTogglerProps {
  type: "nav" | "menu";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: keyof Omit<typeof icons, "createReactComponent">;
  srOnly: string;
}
const DropdownToggler = forwardRef<HTMLButtonElement, DropDownTogglerProps>(
  ({ type, onClick, icon, srOnly }, ref) => {
    const LucideIcon = icons[icon];

    const classes = {
      nav: "inline-flex items-center rounded-lg p-2 text-sm text-garm-light-blue hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 md:hidden",
      menu: "flex rounded-lg p-2.5 text-sm text-garm-light-blue hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 sm:hidden md:flex xl:hidden",
    };

    return (
      <button
        ref={ref}
        data-collapse-toggle="mobile-menu-2"
        onClick={onClick}
        type="button"
        className={classes[type]}
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">{srOnly}</span>
        <LucideIcon className="h-6 w-6" />
      </button>
    );
  }
);

export default DropdownToggler;
