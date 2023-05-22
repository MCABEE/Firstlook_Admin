import { useState } from "react";
import {
  menus,
  placeSubmenus,
  basicSubmenus,
  academicSubmenus,
  institutionSubmenus,
  employersSubmenu,

} from "../constants/Menus";
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
      case "Institution":
        setSubmenus(institutionSubmenus);
        break;  
      case "Employers":  
        setSubmenus(employersSubmenu);
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
      <nav className="min-h-[85vh] z-20 flex flex-col items-start py-8 w-44 px-4 bg-white border-r-2 border-indigo-100 shadow-md sm:flex">
        <div className="flex w-full flex-1 flex-col z-20 items-start space-y-6">
          {menus.map((option, index) => (
            <button
              className={
                option === active
                  ? "text-blue w-full font-medium text-start"
                  : "hover:text-blue w-full text-start"
              }
              onClick={() => toggleSubmenu(option)}
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
        <Link
          className="border border-gray rounded-xl p-2 hover:shadow-md transition duration-200"
          to={"/controlPanel"}
        >
          Back to Home
        </Link>
      </nav>

      {/* Sub menus */}
      {toggle && (
        <div
          className={
            "z-10 w-44 bg-white border-r-2 py-8 px-4 border-indigo-100 shadow-lg rounded-tr-3xl rounded-br-3xl"
          }
        >
          <nav className="flex flex-col items-start space-y-6">
            {submenus?.map((option) => (
              <button
                className="hover:text-blue w-full text-start"
                onClick={() => selectSubmenu(option.link)}
                key={option?.id}
              >
                {option?.menu}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
