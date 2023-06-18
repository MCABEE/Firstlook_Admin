/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addUniversity } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { institutionSchema } from "../../../../validation/dataManager/institutions/institution";

const Form = ({ countries }) => {
  const [country, setCountry] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await institutionSchema.validate({ country, institution });
      await addUniversity({ country, institution, location });
      toast.success("University added!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add University Name</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />
      <InputField
        id={"university"}
        placeholder={"University Name"}
        type={"text"}
        setState={setInstitution}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
