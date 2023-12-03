import Image from "next/image";

import logo from "/public/about-us.svg";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-white bg-banner bg-repeat-x bg-48 pb-12 px-10">
      <div className="w-full large-max:text-center mt-24 mb-6 text-[32px]">
        About Us
      </div>
      <div className="flex w-full large-max:flex-col items-center gap-10">
        <div>
          <Image src={logo} width={680} height={400} />
        </div>
        <div className="px-[calc(100%/16)] flex flex-col gap-4 text-xs md:text-sm lg:text-lg">
          <p className="">
            We are a team of Viva Piñata fans making a project that hpes to bring a third installment of the main series to light.
          </p>
          <p>
            Our entire project is non-profit, made by the fans for the fans.
          </p>
          <p>
            Our goal is to bring life back to the Viva Piñata Franchise.
          </p>
          <button className="w-[calc(100%/4)] h-12 rounded-[9px] bg-black text-white">
            Our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// We are a team of Viva Piñata fans making a project that hopes to bring a third instalment of the main series to light.

// Our entire project is non-profit, made by the fans for the fans.

// Our goal is to bring life back to the Viva Piñata Franchise.
