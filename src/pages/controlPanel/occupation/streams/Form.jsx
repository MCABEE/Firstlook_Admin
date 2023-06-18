import { useState } from "react";
import Button from "../../../../components/Button";
import InputField from "../../../../components/inputField";
import { addOccupationStream } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { occupationStreamSchema } from "../../../../validation/dataManager/occupation/stream";

const Form = () => {
  const [stream, setStream] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await occupationStreamSchema.validate({ stream });
      await addOccupationStream({ stream });
      toast.success("Stream added!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
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
