/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addMotherTounge, getStates } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [country, setCounty] = useState("");

  const [stateId, setStateId] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMotherTounge({ stateId, language });
    toast.success("Language added!");
  };

  const listStates = async (country) => {
    const { data } = await getStates(country);
    setStates(data.states);
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Mother Tounge</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCounty}
      />
      <DropdownValueId
        name={"state"}
        options={states}
        placeHolder={"Select State / Province"}
        setState={setStateId}
      />
      <InputField
        id={"language"}
        placeholder={"Language"}
        type={"text"}
        setState={setLanguage}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
