import { useState } from "react";
import {
  menus,
  placeSubmenus,
  basicSubmenus,
  academicSubmenus,
} from "../../constants/Menus";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [submenus, setSubmenus] = useState([]);
  const navigate = useNavigate();

  const toggleSubmenu = (option) => {
    if (active === option) {
      setToggle(false);
      setActive(null);
      return;
    }
    setActive(option);
    setSubmenu(option);
    setToggle(true);
  };

  const setSubmenu = (option) => {
    switch (option) {
      case "Basic":
        setSubmenus(basicSubmenus);
        break;
      case "Places":
        setSubmenus(placeSubmenus);
        break;
      case "Academic":
        setSubmenus(academicSubmenus);
        break;
      default:
        setSubmenus([]);
    }
  };

  const selectSubmenu = (link) => {
    navigate(link);
    setToggle(false);
    setActive(null);
  };

  return (
    <div className="flex transition-all">
      {/* Side bar */}
      <nav className="min-h-[85vh] z-20 flex flex-col items-center flex-shrink-0 w-36 py-4 bg-white border-r-2 border-indigo-100 shadow-md sm:flex rounded-lg">
        <div className="flex flex-1 flex-col z-20 items-start p-4 space-y-4">
          {menus.map((option, index) => (
            <button
              className={
                option === active ? "font-bold text-blue" : "font-medium"
              }
              onClick={() => toggleSubmenu(option)}
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
        <Link className="border border-gray rounded-md p-2" to={'/controlPanel'}>Back to Home</Link>
      </nav>

      {/* Sub menus */}
      <div
        className={
          !toggle
            ? "hidden"
            : "z-10 flex-shrink-0 w-44 bg-white border-r-2 border-indigo-100 shadow-lg rounded-tr-3xl rounded-br-3xl transition-all duration-500 ease-in-out"
        }
      >
        <nav className="flex flex-col z-20 items-start p-4 space-y-4">
          {submenus?.map((option) => (
            <button className="hover:text-blue" onClick={() => selectSubmenu(option.link)} key={option?.id}>
              {option?.menu}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
