import { useState } from "react";
import Dropdown from "../../../components/dropDown";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";
import { streams } from "../../../constants";

const Courses = () => {
    const [selected, setSelected] = useState("add");
    const selectedLink =
      "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
    const nonSelectedLink =
      "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";
  
    return (
      <section>
        <div className="grid place-content-center mt-8">
          <div className="flex gap-5 mb-10">
            <button
              onClick={() => setSelected("add")}
              className={selected === "add" ? selectedLink : nonSelectedLink}
            >
              Add
            </button>
            <button
              onClick={() => setSelected("viewAll")}
              className={selected === "viewAll" ? selectedLink : nonSelectedLink}
            >
              View all
            </button>
          </div>
          <form>
            <h2 className="mb-4">Add Course</h2>
            <Dropdown name={"stream"} options={streams} placeHolder={'Select Stream'}/>
            <InputField id={"course"} placeholder={"Course Name"} type={"text"} />
            <Button
              label={"Save"}
              style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
            />
          </form>
        </div>
      </section>
    );
}

export default Courses