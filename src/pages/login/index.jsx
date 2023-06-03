import { useState, useEffect } from "react";
import Button from "../../components/Button";
import InputField from "../../components/inputField";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized } from "../../redux/slices/authSlice";
import { doLogin } from "../../services/auth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [selected, setSelected] = useState("master");
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const { authorized } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedLink =
    "w-20 bg-pink text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200";

  // redirect to dashboard, if the user is authorized
  useEffect(() => {
    if (authorized) {
      navigate("/controlPanel");
    }
  });

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await doLogin({
        email: mail,
        password,
        isMaster: selected === "master" ? true : false,
      });

      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(setAuthorized());
      navigate("/controlPanel");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Header />
      <section className="h-[90vh] flex items-center justify-center bg-slate-100">
        <div>
          <h3>Select Login Type</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8 mt-5 mb-10 font-medium">
              <div
                onClick={() => setSelected("master")}
                className={
                  selected === "master" ? selectedLink : nonSelectedLink
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

            <InputField
              type={"text"}
              id={"email"}
              placeholder={"Email ID"}
              setState={setMail}
            />
            <InputField
              type={"password"}
              id={"password"}
              placeholder={"Password"}
              setState={setPassword}
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
