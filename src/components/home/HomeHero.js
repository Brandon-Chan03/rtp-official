import Link from "next/link";

import video from "../../../public/video.mp4";

const HomeHero = () => {
  return (
    <div className="flex justify-center items-center w-full relative">
      {/* <video autoPlay loop muted className="w-full h-auto" src={"/public/video.mp4"} /> */}
      <video autoPlay loop muted className="w-full h-auto">
        <source src={require("../../../public/video.mp4")} type="video/mp4" />
      </video>
      <div className="mt-[calc(100%/4)] absolute inset-0 left-[calc(100%/32)] flex items-center justify-center">
        <Link className="w-[calc(100%/4)] text-center text-white py-1 text-2xl bg-black rounded-[9px] hover:text-black hover:bg-white" href="/downloads">
          Play for Free
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
