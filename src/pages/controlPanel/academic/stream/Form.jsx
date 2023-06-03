import { useState } from "react";
import Button from "../../../../components/Button";
import InputField from "../../../../components/inputField";
import { addStream } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = () => {
  const [stream, setStream] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStream({ stream });
    toast.success("Stream added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Stream</h2>
      <InputField
        id={"stream"}
        placeholder={"Stream Name"}
        type={"text"}
        setState={setStream}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
