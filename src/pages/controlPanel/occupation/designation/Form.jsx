/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  addDesignation,
  getOccupationStreamsList,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { designationSchema } from "../../../../validation/dataManager/occupation/designation";
import { streamCategories } from "../../../../lib/constants";

const Form = () => {
  const [streams, setStreams] = useState([]);
  const [category, setCategory] = useState("");
  const [streamId, setStreamId] = useState("");
  const [designation, setDesignation] = useState("");

  const listStreams = async (category) => {
    const { data } = await getOccupationStreamsList(category);
    setStreams(data.occupationStreams);
  };

  useEffect(() => {
    listStreams(category);
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await designationSchema.validate({ streamId, designation });
      await addDesignation({ streamId, designation });
      toast.success("Designation added!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Designation</h2>
      <Dropdown
        name={"category"}
        options={streamCategories}
        placeHolder={"Select a category"}
        setState={setCategory}
      />
      <DropdownValueId
        name={"stream"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={setStreamId}
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
