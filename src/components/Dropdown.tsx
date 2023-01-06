import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import DropdownToggler from "./DropdownToggler";

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  const togglerRef: RefObject<HTMLButtonElement> = useRef(null);
  const dropdownRef: RefObject<HTMLUListElement> = useRef(null);

  useEffect(() => {
    // Bind a click event listener to the document
    document.addEventListener("click", handleClickOutsideMenu);

    // Return a cleanup function that unbinds the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  });

  function handleClickOutsideMenu(event: MouseEvent) {
    const dropdownButton = togglerRef.current;
    const dropdown = dropdownRef.current;

    if (dropdownButton && dropdownButton.contains(event.target as Node)) return;

    // Check if the click occurred outside the dropdown menu element
    if (dropdown && !dropdown.contains(event.target as Node)) {
      // The click occurred outside the dropdown menu, so close the menu
      setExpanded(false);
    }
  }

  return (
    <>
      <DropdownToggler
        ref={togglerRef}
        type="menu"
        onClick={() => setExpanded(!expanded)}
        icon="MoreVertical"
        srOnly="Dropdown"
      />
      <ul
        ref={dropdownRef}
        className={` ${
          expanded ? "inline" : "hidden"
        } focus:outline-non absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-lg border border-white/20 bg-black py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm md:mt-5`}
      >
        {children}
      </ul>
    </>
  );
};

export default Dropdown;
