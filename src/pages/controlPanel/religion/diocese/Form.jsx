/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import { dioceseSchema } from "../../../../validation/dataManager/religion/diocese";
import { addDiocese } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = ({ castes }) => {
  const [caste, setCaste] = useState("");
  const [diocese, setDiocese] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dioceseSchema.validate({ caste });
      await addDiocese({ caste, diocese });
      toast.success("Diocese name added!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Diocese</h2>
      <Dropdown
        name={"caste"}
        options={castes}
        placeHolder={"Select a caste"}
        setState={setCaste}
      />
      <InputField
        id={"diocese"}
        placeholder={"Diocese Name"}
        type={"text"}
        setState={setDiocese}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
