import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 left-0 right-0 px-5 bg-sky shadow-scan59 min-h-11">
      <h1 className="sm:relative top-4 sm:h-16 grow-[2] xs:grow-[5] sm:grow-[8] font-pacifico text-lg xs:text-2xl sm:text-4xl">my_TODOList</h1>
      <nav className="grow font-bold sm:text-2xl sm:relative top-3">
        <ul className="flex justify-between items-center text-white">
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
