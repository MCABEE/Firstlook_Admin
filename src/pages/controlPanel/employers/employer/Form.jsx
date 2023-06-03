import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  addEmployer,
  getCountries,
  getOccupationStreams,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [streams, setStreams] = useState([]);

  const [country, setCountry] = useState("");
  const [stream, setStream] = useState("");
  const [employer, setEmployer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployer({ country, stream, employer });
    toast.success("Employer added!");
  };

  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  const listStreams = async () => {
    const { data } = await getOccupationStreams();
    setStreams(data.occupationStreams);
  };

  useEffect(() => {
    listCountries();
    listStreams();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Employer Name</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />
      <Dropdown
        name={"stream"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={setStream}
      />
      <InputField
        id={"employer"}
        placeholder={"Employer Name"}
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
