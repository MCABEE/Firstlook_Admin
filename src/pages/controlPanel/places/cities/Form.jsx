/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addCity, getStatesList } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = ({countries}) => {
  const [states, setStates] = useState([]);
  const [country, setCounty] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const listStates = async (country) => {
    const { data } = await getStatesList(country);
    setStates(data.states);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCity({ stateId: state, city });
    toast.success("City name added!");
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Cities</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCounty}
      />
      <DropdownValueId
        name={"state"}
        options={states}
        placeHolder={"Select State/Province"}
        setState={setState}
      />
      <InputField
        id={"city"}
        placeholder={"City Name"}
        type={"text"}
        setState={setCity}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
