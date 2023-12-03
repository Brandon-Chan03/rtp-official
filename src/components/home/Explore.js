import Link from "next/link";

const Explore = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[450px] bg-candy bg-cover bg-top px-10">
      <div className="absolute inset-0 bg-gray-500 opacity-40" />
      <div className="flex flex-col items-center relative gap-5">
        <h2 className="small-max:text-[24px] text-[32px] text-white">Start Your Adventure</h2>
        <button className="w-[calc(100%/2)] h-12 rounded-[9px] bg-black text-white">
          Play for Free
        </button>
      </div>
    </div>
  );
};

export default Explore;
