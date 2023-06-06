/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import { addState } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = ({countries}) => {
  const [country, setCounty] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addState({ country, state });
    toast.success("State added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add State</h2>
      <Dropdown
        name={"state"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCounty}
      />
      <InputField
        id={"State"}
        placeholder={"State Name"}
        type={"text"}
        setState={setState}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
