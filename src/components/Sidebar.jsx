import { useState } from "react";
import { menus } from "../lib/Menus";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../assets/close_icon.svg";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const [submenus, setSubmenus] = useState([]);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (menu) => {
    // click on selected one
    if (active === menu.name) {
      setToggle(false);
      setActive(null);
      return;
    }

    // click on menu that has submenus
    if (menu.hasSubmenu) {
      setActive(menu.name);
      setSubmenus(menu.subMenu);
      setToggle(true);
      return;
    }

    // click on menu that has no submenu
    setActive(menu.name);
    setToggle(false);
    navigate(menu.link);
  };

  const selectSubmenu = (menu) => {
    // show dropdown menus
    if (menu.hasSubmenu) {
      setDropdown(menu.name);
      return;
    }

    // navigate to the link
    navigate(menu.link);
    setToggle(false);
    setActive(null);
  };

  return (
    <aside className="flex fixed z-40 h-[90vh] transition-all">
      {/* Side bar */}
      <nav className="z-20 py-8 w-44 px-4 bg-white border-r-2 border-indigo-100">
        <ul className="space-y-5">
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                className={
                  menu.name === active
                    ? "text-blue w-full font-medium text-start"
                    : "hover:text-blue w-full text-start"
                }
                onClick={() => handleSelect(menu)}
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sub menus */}

      <div
        className={
          !toggle
            ? "absolute bottom-0 top-0"
            : "absolute bottom-0 top-0 w-44 bg-white border-r-2 py-8 px-4 border-indigo-100 shadow-lg rounded-tr-3xl rounded-br-3xl transform transition-transform duration-300 translate-x-full"
        }
      >
        <button
          onClick={() => setToggle(false)}
          className="absolute top-3 right-3"
        >
          <img src={closeIcon} alt="close" width={20} />
        </button>
        <nav className="flex flex-col items-start space-y-5">
          {submenus?.map((option) => (
            <div className="w-full" key={option?.id}>
              <button
                className={
                  option.name === dropdown
                    ? "text-blue w-full font-medium text-start"
                    : "hover:text-blue w-full text-start"
                }
                onClick={() => selectSubmenu(option)}
              >
                {option?.name}
              </button>
              {/* Dropdown */}
              {dropdown === option.name && (
                <div className="text-sm transition-all duration-500  mt-2 pl-2 flex flex-col gap-y-2">
                  {option.subMenus.map((menu) => (
                    <Link
                      className="hover:text-blue"
                      key={menu.id}
                      to={menu.link}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
