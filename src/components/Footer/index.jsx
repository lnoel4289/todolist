import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <footer className="flex items-center px-5 bg-gray-400 dark:bg-gray-800 text-white dark:text-gray-300 h-11">
        © Laurent Noel - 2023
      </footer>
    </div>
  );
};

export default Footer;
