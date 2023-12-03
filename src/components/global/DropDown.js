"use client";

import { useRef, useEffect } from "react";

import { faArrowUpRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navLinks } from "@/constants";

const DropDown = ({ visible, setIsVisible }) => {
  const dropDownRef = useRef(null);

  // const handleOutsideClick = (event) => {
  //   if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // });

  return (
    <div className={`large-min:hidden z-50 absolute right-0 top-0 ${visible ? "visible" : "invisible"} w-[calc(100%/3)] small-max:w-full small-medium:w-[calc(100%/2)] bg-primary-background mt-16 text-white px-4 pb-4`} ref={dropDownRef}>
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => {
          return (
            <div className="flex justify-between items-center hover:bg-tertiary-background rounded-[9px] p-2" key={link}>
              <div>
                {link}
              </div>
              <FontAwesomeIcon className="w-3 h-3" icon={faArrowUpRight} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
