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
  const authorized = true;

  return (
    <div className={twMerge("mt-[41px] px-[62px]")}>
      {!authorized && (
        <>
          <Hero />
          <div className={twMerge("mt-[150px]")}>
            <Collections />
          </div>
        </>
      )}

      <div
        className={twMerge(
          "flex items-center justify-center",
          authorized ? "mt-16" : "mt-[110px] "
        )}
      >
        <PopularProducts
          popProducts={popProducts}
          setSelectedPage={setSelectedPopPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <div className={twMerge("mt-[110px]")}>
        <Shop
          authorized={authorized}
          setSelectedPage={setSelectedShopPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default Home;
