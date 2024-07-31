import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

const AdminProf = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <span
      onClick={() => setToggle((prev) => !prev)}
      className={twMerge("flex gap-2 items-center")}
    >
      <AiOutlineUser className={StyleSheet.Icon} />

      <RxCaretDown className={StyleSheet.Icon + " !text-2xl"} />
    </span>
  );
};

const StyleSheet = {
  Icon: twMerge("text-[34px] text-PRIMARY/80 cursor-pointer"),
};

export default AdminProf;
