import { twMerge } from "tailwind-merge";
import SideNav from "../Navigation/SideNav";
import PropTypes from "prop-types";

const AdminDashboardContainer = ({ children }) => {
  return (
    <div className="w-full flex items-start">
      <div className={twMerge("h-screen")}>
        <SideNav />
      </div>

      <div className={twMerge("h-screen w-full")}>{children}</div>
    </div>
  );
};

AdminDashboardContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminDashboardContainer;
