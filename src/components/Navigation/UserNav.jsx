import { useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import DropDown from "./DropDown";
import { useClickOutside } from "../../hooks/useClickoutside";
const UserNav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const dropDownRef = useRef(null);

  useClickOutside(dropDownRef, () => setToggle(false));

  const autherized = true;
  const itemsCounter = 3;

  return (
    <div className={twMerge("flex items-center justify-between")}>
      <span
        onClick={() => navigate("/")}
        className={twMerge(
          "font-bold block text-BRAND text-[50px]",
          "cursor-pointer"
        )}
      >
        Solesync
      </span>

      <div
        className={twMerge("flex items-center gap-8", autherized && "hidden")}
      >
        <button
          onClick={() => navigate("/login")}
          type="button"
          className={twMerge("text-[20px] text-PRIMARY/60 ")}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          type="button"
          className={twMerge(
            "text-[20px] text-PRIMARY/80 bg-BRAND/30 py-[5px] px-[29px]",
            "rounded-[10px]"
          )}
        >
          Signup
        </button>
      </div>

      <div
        className={twMerge("flex items-center gap-8", !autherized && "hidden")}
      >
        <div className={twMerge("relative")}>
          {toggle && (
            <div className={twMerge("relative")}>
              <DropDown dropDownRef={dropDownRef} />
            </div>
          )}

          {itemsCounter > 0 && (
            <span
              className={twMerge(
                "text-[14px] bg-BRAND font-semibold text-white rounded-full w-7 h-7 flex items-center justify-center",
                "absolute -top-7 left-1"
              )}
            >
              {itemsCounter}
            </span>
          )}

          <BsCart3 className={StyleSheet.Icon} />
        </div>

        <span
          onClick={() => setToggle((prev) => !prev)}
          className={twMerge("flex gap-2 items-center")}
        >
          <AiOutlineUser className={StyleSheet.Icon} />

          <RxCaretDown className={StyleSheet.Icon + " !text-2xl"} />
        </span>
      </div>
    </div>
  );
};

const StyleSheet = {
  Icon: twMerge("text-[34px] text-PRIMARY/80 cursor-pointer"),
};

export default UserNav;
