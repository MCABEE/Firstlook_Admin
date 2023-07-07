import { useState, useEffect } from "react";
import Button from "../../components/Button";
import InputField from "../../components/inputField";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorized } from "../../redux/slices/authSlice";
import { doLogin } from "../../services/auth";
import { signinSchema } from "../../validation/authentication/signin";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const LoginPage = () => {
  const [selected, setSelected] = useState("master");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { authorized } = useSelector((store) => store.auth);

  const { setToken } = useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redirect to dashboard, if the user is authorized
  useEffect(() => {
    if (authorized) {
      navigate("/controlPanel");
    }
  }, [authorized, navigate]);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signinSchema
      .validate({ email: mail, password })
      .then(async () => {
        try {
          const { data } = await doLogin({
            email: mail,
            password,
            isMaster: selected === "master" ? true : false,
          });
          setToken(data.accessToken);
          dispatch(setAuthorized(true));
          navigate("/controlPanel");
        } catch (error) {
          toast.error(error.response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <Header />
      <section className="mt-16 min-h-[90vh] flex items-center justify-center bg-slate-100">
        <div>
          <h3>Select Login Type</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8 mt-5 mb-10 font-medium">
              <div
                onClick={() => setSelected("master")}
                className={`${
                  selected === "master" ? "bg-pink text-white" : "bg-white"
                } text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200`}
              >
                MASTER
              </div>
              <div
                onClick={() => setSelected("region")}
                className={`${
                  selected === "region" ? "bg-pink text-white" : "bg-white"
                } text-center cursor-pointer w-36 p-2 rounded-xl border border-slate-200`}
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
