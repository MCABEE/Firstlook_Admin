/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addCollege } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const From = ({ countries }) => {
  const [country, setCountry] = useState("");
  const [institution, setInstitution] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCollege({ country, institution, location });
    toast.success("College added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add College Name</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />
      <InputField
        id={"college"}
        placeholder={"College Name"}
        type={"text"}
        setState={setInstitution}
      />
      <InputField
        id={"place"}
        placeholder={"Location / Place"}
        type={"text"}
        setState={setLocation}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default From;
