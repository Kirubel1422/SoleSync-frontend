import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const ProductsContainer = ({ children }) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[25px]"
      )}
    >
      {children}
    </div>
  );
};

ProductsContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProductsContainer;
