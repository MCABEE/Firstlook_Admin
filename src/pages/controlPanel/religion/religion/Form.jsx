import { useState } from "react";
import { addReligion } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import { religionSchema } from "../../../../validation/dataManager/religion/religion";

const Form = () => {
  const [religion, setReligion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await religionSchema.validate({ religion });
      await addReligion({ religion });
      toast.success("Religion added!");
    } catch (error) {
      toast.error(error.message || "Couldn't add!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Religion</h2>
      <InputField
        id={"religion"}
        placeholder={"Religion Name"}
        type={"text"}
        setState={setReligion}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
