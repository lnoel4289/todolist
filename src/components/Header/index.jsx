import { NavLink } from "react-router-dom";

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="flex justify-between sticky top-0 left-0 right-0 px-5 shadow-sm bg-orange-500 text-white font-semibold">
=======
    <header className="flex justify-between sticky top-0 left-0 right-0 px-5 shadow-sm bg-orange-500 text-white">
>>>>>>> ea1c68af726c28de021582b48b01f899f392be55
      <h1 className="grow-[8]">my_TODOList</h1>
      <nav className="grow">
        <ul className="flex justify-between">
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
