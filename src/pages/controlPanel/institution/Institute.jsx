import { useState } from "react";
import {Dropdown} from "../../../components/dropDown";
import { Institutes, countries } from "../../../lib/constants";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";

const Institute = () => {
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
              <h2 className="mb-4">Add Institute Name</h2>
              <Dropdown
                name={"country"}
                options={countries}
                placeHolder={"Select Country"}
              />
              <InputField
                id={"institute"}
                placeholder={"Institute Name"}
                type={"text"}
              />
              <InputField
                id={"place"}
                placeholder={"Place / Location"}
                type={"text"}
              />
              <Button
                label={"Save"}
                style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
              />
            </form>
          )}
  
          {/* VIEW ALL */}
          {selected === "viewAll" && (
            <div>
              <h2 className="mb-4">View all</h2>
              <Dropdown
                name={"country"}
                options={countries}
                placeHolder={"Select Country"}
              />
  
              <div className="mt-3 flex flex-col gap-3">
               
                    <span
                      className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
                    >
                     Institutes
                    </span>
                    {Institutes?.map((institute) => (
                      <div key={institute?.id} className="flex justify-between ml-4">
                        <div className="flex gap-2">
                          <input id="institute" type="checkbox" />
                          <label htmlFor="institute">{institute?.name}, {institute.place}</label>
                        </div>
                        <button>❌</button>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
}

export default Institute