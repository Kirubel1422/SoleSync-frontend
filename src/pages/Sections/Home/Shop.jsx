import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { categories, brands } from "../../../constants/categoryAndBrand";
import ProductsContainer from "../../../components/Container/ProductsContainer";
import { allProducts } from "../../../constants/shoeLists";
import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";
import { useSearchParams } from "react-router-dom";
import Shoe from "../../../components/Cards/Shoe";
import PaginationContainer from "../../../components/Container/PaginationContainer";
import Paginate from "../../../components/Pagination/Paginate";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const totalItems = 16;

const Shop = ({ setSelectedPage, itemsPerPage, authorized }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    const currentPage = event.selected;
    setSelectedPage(currentPage);
  };

  return (
    <div>
      <div
        className={twMerge(authorized && "flex items-start justify-between")}
      >
        <div>
          <h2 className={twMerge("text-[40px] text-PRIMARY font-semibold")}>
            Shop
          </h2>

          <div className={twMerge("mt-7")}>
            <h3 className={twMerge("text-[22px] text-PRIMARY mt-8 mb-[18px]")}>
              Categories
            </h3>

            <div>
              <List items={categories} />
            </div>
          </div>

          <div className={twMerge("mt-8")}>
            <h3 className={twMerge("text-[22px] text-PRIMARY mt-8 mb-[18px]")}>
              Brands
            </h3>

            <div>
              <List items={brands} />
            </div>
          </div>
        </div>

        <PrimaryBtn
          label={"Proceed to checkout"}
          onClick={() => null}
          Icon={MdOutlineArrowRightAlt}
        />
      </div>

      <div className="shoe-container mt-16">
        <ProductsContainer>
          {allProducts.map((product, index) => (
            <Shoe key={index} {...product} />
          ))}
        </ProductsContainer>

        <PaginationContainer>
          <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
        </PaginationContainer>
      </div>
    </div>
  );
};

const List = ({ items }) => {
  const [params, setParams] = useSearchParams({});

  const handleClick = (item) => {
    const newParams = new URLSearchParams(params);
    if (newParams.has(item.type) && newParams.get(item.type) === item.name) {
      newParams.delete(item.type);
    } else {
      newParams.set(item.type, item.name);
    }
    setParams(newParams);
  };
  return (
    <ul className={twMerge("flex items-center gap-7")}>
      {items.map((item, index) => (
        <SecondaryBtn
          key={index}
          label={item.name}
          id={item.id}
          onClick={() => {
            handleClick(item);
          }}
          active={
            params.get(item.type) === item.name ||
            (item.name == "All" && !params.has(item.type))
          }
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

Shop.propTypes = {
  setSelectedPage: PropTypes.func,
  itemsPerPage: PropTypes.number,
  authorized: PropTypes.bool,
};

export default Shop;
