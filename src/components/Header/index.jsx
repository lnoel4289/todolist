import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between bg-slate-100 border-2 fixed top-0 left-0 right-0" >
      <h1>my_TODOList</h1>
      <nav>
        <ul className="flex">
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
