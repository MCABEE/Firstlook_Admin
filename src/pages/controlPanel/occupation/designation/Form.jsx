import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  addDesignation,
  getOccupationStreams,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = () => {
  const [streams, setStreams] = useState([]);
  const [stream, setStream] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDesignation({ stream, designation });
    toast.success("Designation added!");
  };

  const listStreams = async () => {
    const { data } = await getOccupationStreams();
    setStreams(data.occupationStreams);
  };

  useEffect(() => {
    listStreams();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Designation</h2>
      <Dropdown
        name={"stream"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={setStream}
      />
      <InputField
        id={"designation"}
        placeholder={"Designation Name"}
        type={"text"}
        setState={setDesignation}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
