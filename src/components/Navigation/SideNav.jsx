import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sideNavData } from "../../constants/sideNavData";
import { BiLogOutCircle } from "react-icons/bi";

const SideNav = () => {
  return (
    <div
      className={twMerge(
        "bg-[#EDEDED] pl-[30px] pt-[44px] pb-[42px] flex flex-col justify-between"
      )}
    >
      <div>
        <div className={twMerge("mb-16")}>
          <span
            className={twMerge("text-[32px] font-semibold text-BRAND block")}
          >
            SoleSync
          </span>
          <span className={twMerge("text-[12px] text-PRIMARY/80 block")}>
            Admin Dashboard
          </span>
        </div>

        <div className={twMerge("flex flex-col gap-4")}>
          {sideNavData.map((item, index) => (
            <Tab
              key={index}
              {...item}
              active={item.to === window.location.pathname}
            />
          ))}
        </div>
      </div>

      <div>
        <hr className={twMerge("text-[#CECECE] mb-5")} />

        <div className={twMerge("flex items-center gap-5")}>
          <BiLogOutCircle className={twMerge("text-PRIMARY/80")} size={20} />
          <button className={twMerge("text-[12px] text-PRIMARY ")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ Icon, active, label, path }) => {
  return (
    <Link
      to={path}
      className={twMerge(
        active ? "bg-BRAND" : "bg-white",
        "py-3 pl-[15px] pr-[17px]"
      )}
    >
      <h3 className={twMerge("flex items-center gap-4")}>
        <Icon className={twMerge(active ? "text-white" : "text-[#575757]")} />{" "}
        <span className={twMerge("text-[12px]")}>{label}</span>
      </h3>
    </Link>
  );
};

Tab.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideNav;
