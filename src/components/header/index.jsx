import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUnauthorized } from "../../redux/slices/authSlice";
import { Toaster } from "react-hot-toast";

const Header = () => {
  
  const { authorized } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setUnauthorized())
    navigate("/");
  };

  return (
    <header className="border flex border-b-2 px-4 py-5 border-slate-200">
      <Toaster  position="top-center"/>
      <div className="flex flex-1 gap-6 items-center">
        <div className="flex items-center gap-2">
          <img src="/first look - icon.svg" alt="Logo" width={32} />
          <img src="/first look Side - text.svg" alt="LogoText" width={120} />
        </div>
        <div className="h-5 w-[2px] bg-black" />
        <p>Control Panel</p>
      </div>
      {authorized && (
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
