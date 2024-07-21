import { twMerge } from "tailwind-merge";
import { heroImg } from "../../../assets";
import { Img } from "react-image";
import Skeleton from "react-loading-skeleton";

const Hero = () => {
  return (
    <div>
      <div className=" md:h-[650px] rounded-[64px]">
        <Img
          className={twMerge(
            "object-cover object-bottom w-full h-full rounded-[64px]"
          )}
          src={heroImg}
          alt="Women with shoes on"
          loader={<Skeleton height={650} width="100%" />}
          unloader={<div>Image not found</div>}
        />
      </div>

      <div className={twMerge("flex items-end justify-between mt-[80px]")}>
        <p className={twMerge("text-[96px] font-semibold text-PRIMARY")}>
          <span className={twMerge("text-BRAND")}>Shoes</span> Treasures <br />{" "}
          Awaits you
        </p>

        <button
          className={twMerge(
            "text-[40px] uppercase rounded-[16px] bg-BRAND text-white font-medium px-[67px] py-[39px]"
          )}
        >
          Trending
        </button>
      </div>
    </div>
  );
};

export default Hero;
