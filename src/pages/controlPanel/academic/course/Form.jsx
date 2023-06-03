import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addCourse, getStreams } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Form = () => {
  const [streams, setStreams] = useState([]);
  const [stream, setStream] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse({ stream, course });
    toast.success('Course added!')
  };

  const listStreams = async () => {
    const { data } = await getStreams();
    setStreams(data.streams);
  };

  useEffect(() => {
    listStreams();
  },[]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Course</h2>
      <Dropdown
        name={"stream"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={setStream}
      />
      <InputField
        id={"course"}
        placeholder={"Course Name"}
        type={"text"}
        setState={setCourse}
      />
      <Button
        label={"Save"}
        style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
      />
    </form>
  );
};

export default Form;
