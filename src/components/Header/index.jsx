import { NavLink } from "react-router-dom";

const Header = () => {
  return <header className="text-3xl">HEADER COMPONENT
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>;
};

export default Header;
