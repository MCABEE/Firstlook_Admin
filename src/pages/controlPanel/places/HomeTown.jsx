import { useState } from "react";
import Dropdown from "../../../components/dropDown";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";
import { countries, districts, states } from "../../../constants";

const HomeTown = () => {
    const [selected, setSelected] = useState("add");
    const selectedLink =
      "w-20 bg-pink text-center p-2 rounded-md border border-slate-200 text-white";
    const nonSelectedLink =
      "w-20 bg-white text-center p-2 rounded-md border border-slate-200";
  
    return (
      <section>
        <div className="absolute top-[30%] left-[30%]">
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
            <h2 className="mb-4">Add Home Town</h2>
            <Dropdown name={"country"} options={countries} placeHolder={'Select Country'}/>
            <Dropdown name={"state"} options={states} placeHolder={'Select State'}/>
            <Dropdown name={"state"} options={districts} placeHolder={'Select District'}/>
            <InputField id={"State"} placeholder={"Home Town Name"} type={"text"} />
            <Button
              label={"Save"}
              style={"w-36 rounded-md bg-pink mt-4 text-white py-2 float-right"}
            />
          </form>
        </div>
      </section>
    );
}

export default HomeTown