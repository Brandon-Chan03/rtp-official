import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import Explore from "@/components/home/Explore";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <AboutUs />
      <Explore />
    </div>
  );
};

export default Home;
