import { FcGoogle } from "react-icons/fc";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const GoogleAuth = ({ onClick, style }) => {
  return (
    <button
      className={twMerge(
        style,
        "text-[16px] w-full font-medium text-PRIMARY py-4 rounded-[16px] border-PRIMARY/45 border flex items-center justify-center gap-2"
      )}
      onClick={onClick}
      type="button"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
};

GoogleAuth.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
};
export default GoogleAuth;
