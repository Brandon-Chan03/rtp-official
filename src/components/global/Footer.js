import Image from "next/image";

import logo from "../../../public/rtp_logo.svg";
import patreon from "../../../public/patreon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { navLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 w-full bg-tertiary-background bg-banner bg-repeat-x bg-48 pb-12 px-5">
      <div className="flex flex-col gap-10 medium-min:flex-row justify-between items-center mt-24 w-full">
        <div className="temp-min:hidden">
          <Image className="text-white" src={logo} width={50} height={50} />
        </div>
        <div className="flex gap-8">
          <Image className="block temp-max:hidden text-white" src={logo} width={50} height={50} />
          <div className="flex medium-min:hidden items-center gap-8 large-min:gap-12 xl-min:gap-20">
            <Image className="" src={patreon} width={30} height={30} />
            <FontAwesomeIcon className="text-white w-10 h-10" icon={faDiscord} width={40} height={40} />
          </div>
        </div>
        <div className="flex flex-row temp-max:flex-col items-center text-white gap-8 large-min:gap-12 xl-min:gap-20">
          {navLinks.map((link) => {
            return (
              <div key={link}>{link}</div>
            );
          })}
        </div>
        <div className="hidden medium-min:flex items-center gap-8 large-min:gap-12 xl-min:gap-20">
          <Image className="" src={patreon} width={30} height={30} />
          <FontAwesomeIcon className="text-white w-10 h-10" icon={faDiscord} width={40} height={40} />
        </div>
      </div>
      <div>
        <p className="text-white">
          Return to Paradise is not affiliated with Rare and/or Microsoft. Return to Paradise is an entirely free game, funded out of pocket by its team.
          This game contains no subscriptions, advertisements, or any other forms of revenue.
          (However, we do accept donations.)
        </p>
      </div>
    </div>
  );
};

export default Footer;
