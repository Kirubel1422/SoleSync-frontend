import { twMerge } from "tailwind-merge";
import AdminProf from "../Navigation/AdminProf";
import { AdminTitlePara } from "../Typo/Para";
import PropTypes from "prop-types";

const AdminTopTitle = ({ h1, para }) => {
  return (
    <div className={twMerge("w-full")}>
      <div className={twMerge(" mb-2 flex items-center justify-between")}>
        <h1 className={twMerge("text-[32px] text-PRIMARY")}>{h1}</h1>

        <AdminProf />
      </div>

      <AdminTitlePara>{para}</AdminTitlePara>
    </div>
  );
};

AdminTopTitle.propTypes = {
  h1: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default AdminTopTitle;
