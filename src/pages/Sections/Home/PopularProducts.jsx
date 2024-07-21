import { twMerge } from "tailwind-merge";
import Shoe from "../../../components/Cards/Shoe";
import PropTypes from "prop-types";

const PopularProducts = ({ popProducts }) => {
  return (
    <div>
      <h2
        className={twMerge(
          "font-medium text-[40px] text-PRIMARY text-center mb-[41px]"
        )}
      >
        Popular Products
      </h2>

      <div className={twMerge("grid md:grid-cols-4 gap-[25px]")}>
        {popProducts.map((prod, index) => (
          <Shoe {...prod} key={index} />
        ))}
      </div>
    </div>
  );
};

PopularProducts.propTypes = {
  popProducts: PropTypes.arrayOf({
    img: PropTypes.string,
    shoeName: PropTypes.string,
    price: PropTypes.number,
    shoeId: PropTypes.string,
  }),
};
export default PopularProducts;
