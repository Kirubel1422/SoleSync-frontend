import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { demoIncart } from "../constants/demoIncartData";
import CartCard from "../components/Cards/CartCard";
import Summary from "./Sections/Cart/Summary";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className={twMerge("mt-16")}>
      <div>
        <MdOutlineArrowRightAlt
          size={46}
          onClick={() => navigate(-1)}
          className={twMerge("rotate-180 text-PRIMARY/80 cursor-pointer")}
        />
      </div>

      <div className={twMerge("grid grid-cols-3 mt-8 gap-x-20")}>
        <div className={twMerge("col-span-2")}>
          <div className={twMerge(" flex flex-col gap-8")}>
            {demoIncart.map((incart, index) => (
              <CartCard {...incart} key={index} />
            ))}
          </div>
        </div>

        <div className={twMerge("col-span-1")}>
          <Summary inCartItems={demoIncart} />

          <PrimaryBtn
            style={"w-full mt-8"}
            label={"Checkout"}
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
