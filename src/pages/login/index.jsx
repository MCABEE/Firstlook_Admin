import { useState, useEffect, useContext } from "react";
import Button from "../../components/Button";
import InputField from "../../components/inputField";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { auth, setAuth } = useContext(authContext);
  const [selected, setSelected] = useState("major");
  const navigate = useNavigate();

  const selectedLink =
    "w-20 bg-pink text-center cursor-pointer w-40 p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center cursor-pointer w-40 p-2 rounded-xl border border-slate-200";

  useEffect(() => {
    if (auth) {
      navigate("/controlPanel");
    }
  }, [auth]);

  const login = () => {
    setAuth(true);
    navigate("/controlPanel");
  };

  return (
    <div>
      <Header />
      <section className="h-[90vh] flex items-center justify-center bg-slate-100">
        <div>
          <h3>Select Login Type</h3>
          <form onSubmit={login}>
            <div className="flex gap-10 mt-5 mb-10 font-medium">
              <div
                onClick={() => setSelected("major")}
                className={
                  selected === "major" ? selectedLink : nonSelectedLink
                }
              >
                MASTER
              </div>
              <div
                onClick={() => setSelected("region")}
                className={
                  selected === "region" ? selectedLink : nonSelectedLink
                }
              >
                REGION
              </div>
            </div>

            <InputField type={"text"} id={"email"} placeholder={"Email ID"} />
            <InputField
              type={"password"}
              id={"password"}
              placeholder={"Password"}
            />
            <Button
              label={"OPEN"}
              style={"w-40 rounded-xl bg-pink mt-4 text-white py-2"}
            />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
