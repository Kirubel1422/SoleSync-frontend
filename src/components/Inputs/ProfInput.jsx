import { useField } from "formik";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const ProfField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <div
      className={twMerge(
        "w-full text-[16px] flex items-center justify-between"
      )}
    >
      <label
        htmlFor={props?.name || props?.id}
        className={twMerge("text-[16px] text-PRIMARY block")}
      >
        {label}
      </label>

      <div className={twMerge("relative ")}>
        <input
          className={twMerge(
            "outline-none text-[16px] w-full appearance-none  placeholder:text-[#C8C8C8] placeholder:italic",
            !error ? "text-PRIMARY/80 " : "ring-red-500 text-red-500"
          )}
          {...props}
          {...field}
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

export const ProfSubmit = ({ label, style }) => {
  return (
    <input
      type="submit"
      className={twMerge(
        style,
        "appearance-none cursor-pointer bg-BRAND py-2 px-6 rounded-[16px] text-white text-[14px] font-semibold"
      )}
      value={label}
    />
  );
};

ProfField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

ProfSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
};
