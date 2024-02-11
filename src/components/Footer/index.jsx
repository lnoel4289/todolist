import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <footer className="flex items-center px-5 bg-gray-900 text-white dark:text-gray-300 h-11 sm:h-16">
        © Laurent Noel - 2024
      </footer>
    </div>
  );
};

export default Footer;
