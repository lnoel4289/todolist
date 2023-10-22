import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between sticky top-0 left-0 right-0 px-5 bg-sky shadow-scan59 font-semibold text-white">
      <h1 className="grow-[5] sm:grow-[8] font-indie text-xl xs:text-2xl">my_TODOList</h1>
      <nav className="grow self-center">
        <ul className="flex justify-between items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
