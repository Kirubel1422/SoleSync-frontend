import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const PaginationContainer = ({ children }) => {
  return (
    <div className={twMerge("mt-16 flex items-center justify-center")}>
      {children}
    </div>
  );
};

PaginationContainer.propTypes = {
  children: PropTypes.node,
};

export default PaginationContainer;
