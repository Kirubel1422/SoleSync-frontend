import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const UserNav = () => {
  const navigate = useNavigate();
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

      <div className={twMerge("flex items-center gap-8")}>
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
    </div>
  );
};

export default UserNav;
