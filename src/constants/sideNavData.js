import { IoIosResize } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineCategory, MdOutlineColorLens } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";

export const sideNavData = [
  {
    Icon: RiDashboardHorizontalLine,
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    Icon: TbPackages,
    label: "Products",
    to: "/dashboard/products",
  },
  {
    Icon: IoIosResize,
    label: "Sizes",
    to: "/dashboard/sizes",
  },
  {
    Icon: MdOutlineColorLens,
    label: "Colors",
    to: "/dashboard/colors",
  },
  {
    Icon: MdOutlineCategory,
    label: "Category",
    to: "/dashboard/category",
  },
  {
    Icon: LuUsers2,
    label: "Users",
    to: "/dashboard/users",
  },
];
