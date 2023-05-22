import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ControlPanel = () => {
  return (
    <>
      <Header />
      <main className="layout bg-slate-100 h-screen w-screen overflow-hidden">
        <Sidebar />
        <section className="content p-5 ">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ControlPanel;
