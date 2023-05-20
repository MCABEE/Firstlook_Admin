import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ControlPanel = () => {
  return (
    <>
      <Header />
      <section className="layout bg-slate-100 h-screen w-screen overflow-hidden">
        <Sidebar />
        <main className="content p-5 ">
          <Outlet />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default ControlPanel;
