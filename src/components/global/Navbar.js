"use client";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/pro-regular-svg-icons";

import Image from "next/image";
import Link from "next/link";

import { useWindowSizeHook } from "@/hooks/handleWindowResize";

import logo from "../../../public/rtp_logo.svg";
import DropDown from "./DropDown";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const windowSize = useWindowSizeHook();

  useEffect(() => {
    if (windowSize.width > 950) {
      setIsActive(false);
    }
  }, [windowSize]);

  return (
    <>
      <nav className="bg-primary-background w-full h-16 flex justify-between items-center px-5">
        <Image height={70} src={logo} width={70} />
        <div className="hidden large-min:flex text-white gap-20">
          <Link className="font-irish-grover" href="/about">About</Link>
          <Link href="/news">News</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/wiki">Wiki</Link>
        </div>
        <div className="z-50 flex justify-center items-center large-min:hidden text-white w-10 h-10 bg-tertiary-background rounded-full">
          {isActive ? (
            <FontAwesomeIcon className="w-5 h-5" icon={faX} onClick={() => setIsActive(!isActive)} />
          ) : (
            <FontAwesomeIcon className="w-5 h-5" icon={faBars} onClick={() => setIsActive(!isActive)} />
          )}
        </div>
        <div className="hidden large-min:block" />
      </nav>
      <DropDown visible={isActive} setIsVisible={setIsActive} />
    </>
  );
};

export default Navbar;
