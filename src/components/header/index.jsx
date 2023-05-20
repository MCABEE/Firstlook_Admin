import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(authContext);
  const logout = () => {
    setAuth(false);
    navigate("/");
  };

  return (
    <header className="border flex border-b-2 px-4 py-5 border-slate-200">
      <div className="flex flex-1 gap-6 items-center">
        <div className="flex items-center gap-2">
          <img src="/first look - icon.svg" alt="Logo" width={32} />
          <img src="/first look Side - text.svg" alt="LogoText" width={120} />
        </div>
        <div className="h-5 w-[2px] bg-black" />
        <p>Control Panel</p>
      </div>
      {auth && (
        <button
          onClick={logout}
          className="border border-slate-200 bg-slate-300 p-2 font-medium rounded-md"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
