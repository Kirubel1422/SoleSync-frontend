import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import ProductsContainer from "../../../components/Container/ProductsContainer";
import Shoe from "../../../components/Cards/Shoe";
import PaginationContainer from "../../../components/Container/PaginationContainer";
import Paginate from "../../../components/Pagination/Paginate";

// Should be replace from api call.
const totalItems = 16;

const PopularProducts = ({ popProducts, setSelectedPage, itemsPerPage }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setSelectedPage(selectedPage);
  };

  return (
    <div>
      <h2
        className={twMerge(
          "font-medium text-[40px] text-PRIMARY text-center mb-[41px]"
        )}
      >
        Popular Products
      </h2>

      <ProductsContainer>
        {popProducts.map((product, index) => (
          <Shoe {...product} key={index} />
        ))}
      </ProductsContainer>

      <PaginationContainer>
        <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
      </PaginationContainer>
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
  setSelectedPage: PropTypes.func,
  itemsPerPage: PropTypes.number,
};
export default PopularProducts;
