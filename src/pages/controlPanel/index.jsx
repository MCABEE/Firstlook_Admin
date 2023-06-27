import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ControlPanel = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="bg-slate-100 min-h-screen mt-20 ml-44 p-5 overflow-x-scroll">
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ControlPanel;
