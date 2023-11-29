"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/pro-light-svg-icons";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/rtp_logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState();

  return (
    <nav className="fixed z-10 bg-primary-background w-full h-16 flex justify-between items-center px-5">
      <Image height={70} src={logo} width={70} />
      <div className="hidden lg:flex text-white gap-20">
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/downloads">Downloads</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/wiki">Wiki</Link>
      </div>
      <div className="lg:hidden text-white w-7 h-7">
        {isActive ? (
          <FontAwesomeIcon className="w-7 h-7" icon={faX} onClick={() => setIsActive(!isActive)} />
        ) : (
          <FontAwesomeIcon className="w-7 h-7" icon={faBars} onClick={() => setIsActive(!isActive)} />
        )}
      </div>
      <div className="hidden lg:block" />
    </nav>
  );
};

export default Navbar;
