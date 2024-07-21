import { twMerge } from "tailwind-merge";
import Collections from "./Sections/Home/Collections";
import Hero from "./Sections/Home/Hero";
import PopularProducts from "./Sections/Home/PopularProducts";
import { popProducts } from "../constants/popularProducts";
import { useState } from "react";
import Shop from "./Sections/Home/Shop";
const itemsPerPage = 4;

const Home = () => {
  const [selectedPopPage, setSelectedPopPage] = useState(0);
  const [selectedShopPage, setSelectedShopPage] = useState(0);

  return (
    <div className={twMerge("mt-[41px]")}>
      <Hero />

      <div className={twMerge("mt-[150px]")}>
        <Collections />
      </div>

      <div className={twMerge("mt-[110px] flex items-center justify-center")}>
        <PopularProducts
          popProducts={popProducts}
          setSelectedPage={setSelectedPopPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <div className={twMerge("mt-[110px]")}>
        <Shop
          setSelectedPage={setSelectedShopPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default Home;
