import InputField from "../../components/inputField";
import RadioButton from "./RadioButton";

const LoginPage = () => {

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-slate-100">
      <div>
        <h3>Select Login Type</h3>
        <form>
          <div className="flex gap-10">
            <RadioButton
              id={"master"}
              value={"master"}
             label={"MASTER"}
            />

            <RadioButton
              id={"region"}
              value={"region"}
              label={"REGION"}
            />
          </div>

          <InputField type={"text"} id={"email"} placeholder={"Email ID"} />
          <InputField
            type={"password"}
            id={"password"}
            placeholder={"Password"}
          />
          <button
            type="submit"
            className="w-40 my-5 cursor-pointer bg-pink rounded-md py-2 font-medium text-white"
          >
            OPEN
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
