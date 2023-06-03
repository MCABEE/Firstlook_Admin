/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import { addCaste } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = ({religions}) => {

    const [religion, setReligion] = useState("");
    const [caste, setCaste] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCaste({ religion, caste });
        toast.success("Caste name added!");
      };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Caste</h2>
      <Dropdown
        name={"religion"}
        options={religions}
        placeHolder={"Select Religion"}
        setState={setReligion}
      />
      <InputField
        id={"caste"}
        placeholder={"Caste Name"}
        type={"text"}
        setState={setCaste}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
