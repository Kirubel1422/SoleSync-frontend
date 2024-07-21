import { useField } from "formik";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const AuthField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <div className={twMerge("w-full text-[16px]")}>
      <label htmlFor={props?.name || props?.id} className={twMerge("block")}>
        {label}
      </label>

      <div className={twMerge("relative w-full")}>
        <input
          className={twMerge(
            "pl-16 outline-none text-[16px] w-full appearance-none rounded-[16px] ring-1 py-4 placeholder:text-[#C8C8C8] placeholder:italic",
            !error ? "ring-BRAND text-PRIMARY/70 " : "ring-red-500 text-red-500"
          )}
          {...props}
          {...field}
        />

        <props.Icon
          size={20}
          className={twMerge(
            "absolute top-[31%] left-4",
            !error ? "text-BRAND" : "text-red-500"
          )}
        />
      </div>

      {error && (
        <div className={twMerge("text-sm text-red-500 mt-2 ml-4")}>
          {meta.error}
        </div>
      )}
    </div>
  );
};

AuthField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export const AuthSubmit = ({ label, style }) => {
  return (
    <input
      type="submit"
      className={twMerge(
        style,
        "appearance-none bg-BRAND py-4 rounded-[16px] text-white text-[16px] font-bold w-full"
      )}
      value={label}
    />
  );
};

AuthSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
};
