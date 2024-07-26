import { twMerge } from "tailwind-merge";
import { AiOutlineUser } from "react-icons/ai";
import PropTypes from "prop-types";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { useState } from "react";
import Profile from "../../pages/Modals/Profile";

const DropDown = ({ dropDownRef }) => {
  const [profOpen, setProfOpen] = useState(false);
  const dropDownData = [
    {
      Icon: VscHistory,
      onClick: () => null,
      label: "Orders",
    },
    {
      Icon: IoMdHeartEmpty,
      onClick: () => null,
      label: "Favorites",
    },
    {
      Icon: AiOutlineUser,
      onClick: () => setProfOpen(true),
      label: "Profile",
    },
    {
      Icon: BiLogOutCircle,
      onClick: () => null,
      label: "Log out",
    },
  ];
  return (
    <div
      ref={dropDownRef}
      className={twMerge(
        "px-7 pt-4 pb-10 rounded-b-[35px] absolute -left-[120px] top-[50px] bg-white border border-[#E8E8E8] shadow-[0px 4px 4px rgba(0, 0, 0, 0.80)]"
      )}
    >
      <div className={twMerge("flex items-center gap-5")}>
        <AiOutlineUser size={34} className={twMerge("text-PRIMARY/80")} />

        <div>
          <span className={twMerge("text-PRIMARY/80 block text-[16px]")}>
            Kirubel Mamo
          </span>
          <span className={twMerge("text-[#6B7280] font-[300]")}>
            kirubel@gmail.com
          </span>
        </div>
      </div>

      <hr className={twMerge("w-full text-[#2B2C2C]/[13] mt-5 mb-4")} />

      <ul>
        {dropDownData.map((item, index) => (
          <ListItem {...item} key={index} index={index} />
        ))}
      </ul>

      {profOpen && <Profile handleClose={() => setProfOpen(false)} />}
    </div>
  );
};

const ListItem = ({ onClick, label, Icon, index }) => {
  return (
    <li
      className={twMerge(
        "flex items-start gap-[46px] text-lg text-PRIMARY/80 cursor-pointer",
        index == 0 ? "mt-4" : "mt-5"
      )}
      onClick={onClick}
    >
      <Icon />
      {label}
    </li>
  );
};

ListItem.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  Icon: PropTypes.elementType,
  index: PropTypes.number,
};

DropDown.propTypes = {
  dropDownRef: PropTypes.object,
};

export default DropDown;
