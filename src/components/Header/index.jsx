import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import * as langActions from "../ToggleSwitch/langSlice";
import * as modeActions from "../ToggleSwitch/modeSlice";
import data from "../../data/lang";

const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const mode = useSelector((state) => state.mode);
  const text = lang === "en" ? data.en : data.fr;
  const toggleLang = () => {
    dispatch(langActions.change());
  };
  const toggleMode = () => {
    dispatch(modeActions.change());
  };

  return (
    <div
      className={
        mode === "dark"
          ? "dark z-10 sticky top-0 left-0 right-0"
          : "z-10 sticky top-0 left-0 right-0"
      }
    >
      <header className="text-sm sm:text-lg px-3 xs:px-5 py-1.5 h-14 xs:h-16 sm:h-20 flex flex-col justify-between shadow-scan59 shadow-gray-400 dark:shadow-none bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
        <div className="flex">
          <h1 className="tracking-wide ss:tracking-widest top-4 grow-[2] xs:grow-[5] sm:grow-[8] font-pacifico xs:text-lg sm:text-3xl">
            my_TODOList
          </h1>
          <nav className="w-3/5 xs:w-7/12 ss:w-1/2 sm:w-5/12 grow grid p-0.5 font-bold sm:relative top-3">
            <ul className="text-xs xs:text-sm sm:text-2xl grid grid-cols-2 justify-between uppercase ">
              <li className="justify-self-end">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-gray-400 text-white rounded px-1 py-0.5" : ""
                  }
                >
                  {text.header.home}
                </NavLink>
              </li>
              <li className="justify-self-end">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "bg-gray-400 text-white rounded px-1 py-0.5" : ""
                  }
                >
                  {text.header.about}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
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
      </header>
    </div>
  );
};

export default Header;
