import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const PrimaryBtn = ({ label, Icon, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-7 py-4 bg-BRAND text-white rounded-[12px] font-bold text-[16px] flex items-center justify-center gap-[10px]",
        style
      )}
    >
      {label} {Icon && <Icon className={twMerge("text-white w-6 h-6")} />}
    </button>
  );
};

PrimaryBtn.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.elementType,
  onClick: PropTypes.func,
  style: PropTypes.string,
};
export default PrimaryBtn;
