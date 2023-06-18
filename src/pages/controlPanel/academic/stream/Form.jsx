import { useState } from "react";
import Button from "../../../../components/Button";
import InputField from "../../../../components/inputField";
import { addStream } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { academicStreamSchema } from "../../../../validation/dataManager/academic/streams";

const Form = () => {
  const [stream, setStream] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await academicStreamSchema.validate({ stream });
      await addStream({ stream });
      toast.success("Stream added!");
    } catch (error) {
      toast.error(error.message || "Somthing went wrong!");
    }
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
