import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import * as langActions from "../ToggleSwitch/langSlice";
import * as modeActions from "../ToggleSwitch/modeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const mode = useSelector((state) => state.mode);
  const toggleLang = () => {
    dispatch(langActions.change());
  };
  const toggleMode = () => {
    dispatch(modeActions.change());
  };

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <header className="z-10 h-14 xs:h-14 sm:h-20 flex justify-between items-center sticky top-0 left-0 right-0 px-5 shadow-scan59 shadow-gray-400">
        <h1 className="sm:relative top-4 sm:h-16 grow-[2] xs:grow-[5] sm:grow-[8] font-pacifico text-lg xs:text-2xl sm:text-4xl">
          my_TODOList
        </h1>
        <div className="grow flex flex-col justify-between h-full p-0.5">
          <nav className="font-bold sm:text-2xl sm:relative top-3">
            <ul className="flex justify-between items-center uppercase text-lg sm:text-2xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border border-black rounded px-0.5" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "border border-black rounded px-0.5" : ""
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-2">
            <ToggleSwitch
              id="lang"
              text="FR"
              state={lang}
              handleChange={toggleLang}
              isChecked={lang === "en" ? false : true}
            />
            <ToggleSwitch
              id="mode"
              text="🌒"
              state={mode}
              handleChange={toggleMode}
              isChecked={mode === "light" ? false : true}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
