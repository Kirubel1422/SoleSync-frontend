import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const ModalContainer = ({ children, style }) => {
  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 w-full h-full bg-black/75 flex items-center justify-center z-50",
        style
      )}
    >
      {children}
    </div>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
};

export default ModalContainer;
