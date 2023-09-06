import { NavLink } from "react-router-dom";

const Header = () => {
  return <header>HEADER COMPONENT
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>;
};

export default Header;
