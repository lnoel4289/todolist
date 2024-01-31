import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="z-10 h-14 xs:h-14 sm:h-20 flex justify-between items-center sticky top-0 left-0 right-0 px-5 bg-sky shadow-scan59 shadow-slate-700">
      <h1 className="sm:relative top-4 sm:h-16 grow-[2] xs:grow-[5] sm:grow-[8] font-pacifico text-lg xs:text-2xl sm:text-4xl">
        my_TODOList
      </h1>
      <div className="grow flex flex-col justify-around h-full">
        <nav className="font-bold sm:text-2xl sm:relative top-3">
          <ul className="flex justify-between items-center text-white uppercase text-lg sm:text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-2 rounded px-1" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-2 rounded px-1" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-2">
          <label htmlFor="tgl-drk" className="relative h-4 w-8">
            <input
              type="checkbox"
              id="tgl-drk"
              className="w-0 h-0 opacity-0 peer"
            ></input>
            <span className="absolute inset-0 bg-gray-300 cursor-pointer before:flex before:absolute before:w-3.5 before:h-3.5 before:bg-white before:top-px before:left-px before:duration-300 before:peer-checked:translate-x-4"></span>
          </label>
          <label htmlFor="tgl-lng" className="relative h-4 w-8">
            <input
              type="checkbox"
              id="tgl-lng"
              className="w-0 h-0 opacity-0 peer"
            ></input>
            <span className="absolute inset-0 bg-gray-300 cursor-pointer before:flex before:absolute before:w-3.5 before:h-3.5 before:bg-white before:top-px before:left-px before:duration-300 before:peer-checked:translate-x-4"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
