import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Select } from "antd";

const Search = ({ name, placeholder, hasKey, keys }) => {
  return (
    <>
      <input
        className={twMerge(
          "bg-[#F0EEEE] outline-none rounded-[16px] placeholder:text-PRIMARY/60 text-[16px] pl-[38px] py-[14.5px]"
        )}
        type="text"
        name={name}
        placeholder={placeholder}
      />
      {hasKey && (
        <Select
          popupClassName={twMerge("!w-[200px]")}
          style={{
            width: "fit-content",
            marginLeft: "20px",
            height: "47px",
          }}
          placeholder="By"
          options={keys}
        />
      )}
    </>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string),
  hasKey: PropTypes.bool,
};
export default Search;
