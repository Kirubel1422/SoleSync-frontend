import { useEffect } from "react";

export const useClickOutside = (ref, handleClose) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};
