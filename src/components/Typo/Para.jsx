import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const AdminTitlePara = ({ children }) => {
  return <p className={twMerge("text-[14px] text-PRIMARY/80")}>{children}</p>;
};

AdminTitlePara.propTypes = {
  children: PropTypes.element.isRequired,
};
