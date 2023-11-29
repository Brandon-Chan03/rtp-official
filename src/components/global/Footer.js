import Link from "next/link";
import Image from "next/image";

import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";

import logo from "../../../public/rtp_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col absolute bottom-0 w-full h-[150px] bg-tertiary-background bg-banner bg-repeat-x bg-48 ">
      <div className="mt-14 flex justify-around items-center text-white gap-2 xs-min:10">
        <Image className="w-10 h-10" src={logo} />
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/downloads">Downloads</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/wiki">Wiki</Link>
        <FontAwesomeIcon icon={faDiscord} />
        <FontAwesomeIcon icon={faPatreon} />
      </div>
      <div>
        Return to Paradise is not affiliated with Rare and/or Microsoft. Return to Paradise is an entirely free game, funded out of pocket by its team. This game contains no subscriptions, advertisements, or any other forms of revenue. (However, we do accept donations.)
      </div>
    </div>
  );
};

export default Footer;

