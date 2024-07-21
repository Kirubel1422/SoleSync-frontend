import { Img } from "react-image";
import Skeleton from "react-loading-skeleton";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Shoe = ({ img, shoeName, price, shoeId }) => {
  return (
    <div
      className={twMerge(
        "w-[309px] pb-6 bg-[#F1F1F1] h-[325px] rounded-[30px]"
      )}
    >
      <Link
        to={"/shoe-detail/" + shoeId}
        className={twMerge(
          "h-[223px] bg-[#F9F9F9] w-full flex items-center justify-center"
        )}
      >
        <Img
          src={img}
          alt={shoeName}
          className={twMerge("w-[170px]")}
          loader={<Skeleton height={223} width={"100%"} />}
        />
      </Link>

      <div className={twMerge("flex flex-col-reverse mt-4 gap-2 px-[37px]")}>
        <div className={twMerge("flex items-center justify-between")}>
          <h3 className={twMerge("text-[16px] text-BRAND font-semibold")}>
            Etb. {price}
          </h3>

          <span className={twMerge("text-PRIMARY/80 cursor-pointer")}>
            <BsCart3 size={25} />
          </span>
        </div>

        <div className={twMerge("flex items-center justify-between")}>
          <h3 className={twMerge("text-lg text-PRIMARY/80 font-semibold")}>
            {shoeName}
          </h3>

          <span className={twMerge("text-PRIMARY/80 cursor-pointer")}>
            <IoMdHeartEmpty size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

Shoe.propTypes = {
  img: PropTypes.string,
  shoeName: PropTypes.string,
  price: PropTypes.number,
  shoeId: PropTypes.string,
};

export default Shoe;
