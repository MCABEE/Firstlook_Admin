/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addDistrict, getStatesList } from "../../../../services/dataManager";

const From = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [country, setCounty] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDistrict({ stateId: state, district });
    toast.success("District added!");
  };

  const listStates = async (country) => {
    const { data } = await getStatesList(country);
    setStates(data.states);
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add District</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCounty}
      />
      <DropdownValueId
        name={"state"}
        options={states}
        placeHolder={"Select State"}
        setState={setState}
      />
      <InputField
        id={"State"}
        placeholder={"District Name"}
        type={"text"}
        setState={setDistrict}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default From;
