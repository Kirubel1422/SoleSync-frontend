import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SecondaryBtn = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        active ? "bg-BRAND text-white" : "bg-[#D9D9D9]  text-PRIMARY/80",
        "text-lg px-8 py-2 rounded-[16px]"
      )}
    >
      {label}
    </button>
  );
};

SecondaryBtn.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default SecondaryBtn;
