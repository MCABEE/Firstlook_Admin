import { useState } from "react";
import Button from "../../../../components/Button";
import InputField from "../../../../components/inputField";
import Dropdown from "../../../../components/dropDown/Dropdown";
import { addDesignation } from "../../../../services/dataManager";
import { designationSchema } from "../../../../validation/dataManager/occupation/designation";
import { toast } from "react-hot-toast";
const categories = [
  { id: 1, name: "Business" },
  { id: 2, name: "Government" },
];

const Form = () => {
  const [category, setCategory] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await designationSchema.validate({ category, designation });
      await addDesignation({ category, designation });
      toast.success("Stream added");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Designation</h2>
      <Dropdown
        name={"category"}
        setState={setCategory}
        placeHolder={"Select a category"}
        options={categories}
      />
      <InputField
        id={"stream"}
        placeholder={"Designation Name"}
        type={"text"}
        setState={setDesignation}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
