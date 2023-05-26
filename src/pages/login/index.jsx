import { useState, useEffect } from "react";
import Button from "../../components/Button";
import InputField from "../../components/inputField";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized } from "../../redux/slices/authSlice";

const LoginPage = () => {
  const [selected, setSelected] = useState("major");
  const { authorized } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedLink =
    "w-20 bg-pink text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200";

  useEffect(() => {
    if (authorized) {
      navigate("/controlPanel");
    }
  }, [authorized]);

  const login = () => {
    dispatch(setAuthorized());
    navigate("/controlPanel");
  };

  return (
    <>
      <Header />
      <section className="h-[90vh] flex items-center justify-center bg-slate-100">
        <div>
          <h3>Select Login Type</h3>
          <form onSubmit={login}>
            <div className="flex gap-8 mt-5 mb-10 font-medium">
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
              style={"w-full rounded-xl bg-pink mt-4 text-white py-2"}
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
