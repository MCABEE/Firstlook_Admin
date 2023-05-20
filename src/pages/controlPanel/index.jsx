import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ControlPanel = () => {
  return (
    <section className="layout bg-slate-100 flex gap-10">
      <Sidebar />
      <Outlet />
    </section>
  );
};

export default ControlPanel;
