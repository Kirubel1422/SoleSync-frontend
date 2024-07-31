import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const DashboardAnalysis = ({ total, time, orders }) => {
  return (
    <div
      className={twMerge(
        "p-6 rounded-[16px] flex flex-col gap-5 bg-[#E5F3F5] max-w-[304px]"
      )}
    >
      <h4
        className={twMerge(
          "font-semibold text-2xl text-[#0F8686] before:content-['Etb._']"
        )}
      >
        {total.toLocaleString()}
      </h4>

      <p
        className={twMerge(
          "text-xl text-[#0F8686] font-[300] after:content-['_Orders']"
        )}
      >
        {orders}
      </p>

      <p className={twMerge("text-xl text-[#0F8686] font-[300] ")}>{time}</p>
    </div>
  );
};

DashboardAnalysis.propTypes = {
  total: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  orders: PropTypes.string.isRequired,
};

export default DashboardAnalysis;
