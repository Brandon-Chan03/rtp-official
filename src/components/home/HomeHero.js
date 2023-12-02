import Link from "next/link";

const HomeHero = () => {
  return (
    <iframe className="z-50" src="https://player.vimeo.com/video/890596107?h=f4764d3c1c&&background=1" width="640" height="564" allow="autoplay; fullscreen" />
    
    // <div className="flex justify-center items-center w-full relative">
    //   {/* <video autoPlay loop muted className="w-full h-auto">
    //     <source src={require("../../../public/video.mp4")} type="video/mp4" />
    //   </video> */}
    //   {/* <div style={{ padding: "75% 0 0 0", position: "relative" }}>
    //     <iframe
    //       src="https://player.vimeo.com/video/890596107?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
    //       allow="autoplay; fullscreen; picture-in-picture"
    //       // style="position:absolute;top:0;left:0;width:100%;height:100%;"
    //       style={{ position: "absolute", top: "0", left: 0, width: "100%", height: "100%"}}
    //       title="LoopingMenuVideo"
    //     />
    //   </div> */}
    //   {/* <iframe
    //     allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    //     allowFullScreen=""
    //     height="347"
    //     src="https://vimeo.com/890596107?share=copy"
    //     width="617"
    //   /> */}
    //   <div className="mt-[calc(100%/4)] absolute inset-0 left-[calc(100%/32)] flex items-center justify-center">
    //     <Link className="w-[calc(100%/4)] text-center text-white py-1 text-2xl bg-black rounded-[9px] hover:text-black hover:bg-white" href="/downloads">
    //       Play for Free
    //     </Link>
    //   </div>
    // </div>
  );
};

export default HomeHero;
