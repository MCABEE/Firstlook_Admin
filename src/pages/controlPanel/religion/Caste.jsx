import { useState } from "react";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";
import Dropdown from "../../../components/dropDown";
import { religions } from "../../../constants";
import deleteIcon from '../../../assets/delete_icon.svg'

const Caste = () => {
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
        {selected === "add" && (
          <form>
            <h2 className="mb-4">Add Caste</h2>
            <Dropdown
              name={"religion"}
              options={religions}
              placeHolder={"Select Religion"}
            />
            <InputField id={"caste"} placeholder={"Caste Name"} type={"text"} />
            <Button
              label={"Save"}
              style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
            />
          </form>
        )}

        {selected === "viewAll" && (
          <div>
            <h2 className="mb-4">View all</h2>
            <Dropdown
              name={"religion"}
              options={religions}
              placeHolder={"Select Religion"}
            />

            <div className="mt-3 flex flex-col gap-3">
              {religions.map((religion) => (
                <>
                  <span
                    key={religion.id}
                    className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
                  >
                    {religion.name}
                  </span>
                  {religion?.caste?.map((name, index) => (
                    <div key={index} className="flex justify-between items-center ml-4">
                      <div className="flex gap-2">
                        <input id={name} type="checkbox" />
                        <label htmlFor={name}>{name}</label>
                      </div>
                      <button><img src={deleteIcon} className="opacity-60" alt="delete" width={22} /></button>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Caste;
