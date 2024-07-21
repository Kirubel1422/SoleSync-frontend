import { twMerge } from "tailwind-merge";
import Collections from "./Sections/Home/Collections";
import Hero from "./Sections/Home/Hero";
import PopularProducts from "./Sections/Home/PopularProducts";
import { popProducts } from "../constants/popularProducts";

const Home = () => {
  return (
    <div className={twMerge("mt-[41px]")}>
      <Hero />

      <div className={twMerge("mt-[150px]")}>
        <Collections />
      </div>

      <div className={twMerge("mt-[81px] flex items-center justify-center")}>
        <PopularProducts popProducts={popProducts} />
      </div>
    </div>
  );
};

export default Home;
