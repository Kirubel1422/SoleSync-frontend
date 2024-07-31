import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const CancelBtn = ({ onClick, label }) => {
  return (
    <button
      className={twMerge(
        "py-[11px] px-8",
        "bg-[#E4DFDF] text-[#818181] text-lg rounded-[16px]"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

CancelBtn.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default CancelBtn;
