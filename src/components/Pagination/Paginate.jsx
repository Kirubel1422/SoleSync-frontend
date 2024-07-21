import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Paginate = ({ handlePageClick, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex items-center gap-[22px] text-lg"
        pageClassName="text-PRIMARY/60"
        nextClassName="ml-[15px]"
        previousClassName="mr-[15px]"
        disabledClassName="text-PRIMARY/60"
        activeClassName="text-white bg-BRAND w-[43px] h-[43px] flex items-center justify-center rounded-full text-lg font-semibold"
      />
    </div>
  );
};

Paginate.propTypes = {
  handlePageClick: PropTypes.func,
  pageCount: PropTypes.number,
};

export default Paginate;
