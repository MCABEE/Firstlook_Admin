import { useState } from "react";
import Dropdown from "../../../components/dropDown";
import { countries, employers, streams } from "../../../constants";
import InputField from "../../../components/inputField";
import Button from "../../../components/Button";

const Employers = () => {
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
              <h2 className="mb-4">Add Employer Name</h2>
              <Dropdown
                name={"country"}
                options={countries}
                placeHolder={"Select Country"}
              />
              <Dropdown
                name={"stream"}
                options={streams}
                placeHolder={"Select Stream"}
              />
              <InputField
                id={"employer"}
                placeholder={"Employer Name"}
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
                options={streams}
                placeHolder={"Select Country"}
              />
  
              <div className="mt-3 flex flex-col gap-3">
                {employers.map((employer) => (
                  <>
                    <span
                      key={employer.id}
                      className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
                    >
                      {employer.stream}
                    </span>
                    {employer?.employers?.map((name,index) => (
                      <div key={index} className="flex justify-between ml-4">
                        <div className="flex gap-2">
                          <input id="course" type="checkbox" />
                          <label htmlFor="course">{name}</label>
                        </div>
                        <button>❌</button>
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
}

export default Employers