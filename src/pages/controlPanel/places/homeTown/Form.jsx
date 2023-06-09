/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  addHomeTown,
  getDistrictsList,
  getStatesList,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { homeTownSchema } from "../../../../validation/dataManager/places/homeTown";

const Form = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [country, setCounty] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [homeTown, setHomeTown] = useState("");

  const listStates = async (country) => {
    const { data } = await getStatesList(country);
    setStates(data.states);
  };

  const listDistricts = async (stateId) => {
    const { data } = await getDistrictsList(stateId);
    setDistricts(data.districts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await homeTownSchema.validate({ district: districtId, homeTown });
      await addHomeTown({ district: districtId, homeTown });
      toast.success("Hometown added!");
    } catch (error) {
      toast.error(error.message || "Coudn't add!");
    }
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  useEffect(() => {
    listDistricts(stateId);
  }, [stateId]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Home Town</h2>
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
        setState={setStateId}
      />
      <DropdownValueId
        name={"district"}
        options={districts}
        placeHolder={"Select District"}
        setState={setDistrictId}
      />
      <InputField
        id={"homeTown"}
        placeholder={"Home Town Name"}
        type={"text"}
        setState={setHomeTown}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
