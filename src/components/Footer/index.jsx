import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <footer className="flex items-center px-5 bg-black text-white opacity-50 h-11">
        © Laurent Noel - 2023
      </footer>
    </div>
  );
};

export default Footer;
