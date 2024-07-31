import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sideNavData } from "../../constants/sideNavData";
import { BiLogOutCircle } from "react-icons/bi";

const SideNav = () => {
  return (
    <div
      className={twMerge(
        "bg-[#EDEDED] h-screen pl-[30px] pt-[44px] pr-[57px] pb-[42px] flex flex-col justify-between"
      )}
    >
      <div>
        <div className={twMerge("mb-16 flex flex-col items-center ")}>
          <span
            className={twMerge("text-[32px] font-semibold text-BRAND block")}
          >
            SoleSync
          </span>
          <span
            className={twMerge("text-[12px] font-medium text-PRIMARY/80 block")}
          >
            Admin Dashboard
          </span>
        </div>

        <div className={twMerge("flex flex-col gap-4")}>
          {sideNavData.map((item, index) => (
            <Tab
              key={index}
              Icon={item.Icon}
              label={item.label}
              path={item.to}
              active={item.to === window.location.pathname}
            />
          ))}
        </div>
      </div>

      <div className={twMerge("flex flex-col items-center gap-5")}>
        <hr className={twMerge("text-[#CECECE]")} />

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
        active ? "text-white" : "text-[#575757]",
        "py-3 pl-[15px] pr-[17px] w-[171px] rounded-[8px]"
      )}
    >
      <h3 className={twMerge("flex items-center gap-4")}>
        <Icon
          className={twMerge(active ? "text-white" : "text-[#575757]")}
          size={20}
        />{" "}
        <span className={twMerge("text-[14px]")}>{label}</span>
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
