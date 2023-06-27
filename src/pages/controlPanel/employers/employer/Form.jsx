/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addEmployer } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { employerSchema } from "../../../../validation/dataManager/employer";

const Form = ({ categories }) => {
  const [category, setCategory] = useState("");
  const [employer, setEmployer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employerSchema.validate({ category, employer });
      await addEmployer({ category, employer });
      toast.success("Employer added!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Employer Name</h2>
      <Dropdown
        name={"category"}
        options={categories}
        placeHolder={"Select a category"}
        setState={setCategory}
      />
      <InputField
        id={"employer"}
        placeholder={"Authority / Employer Name"}
        type={"text"}
        setState={setEmployer}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
