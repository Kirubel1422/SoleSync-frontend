import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SearchBtn = ({ label, onClick }) => {
  return (
    <button
      className={twMerge(
        "text-[14px] rounded-[16px] bg-BRAND text-white py-3 px-5"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

SearchBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBtn;
