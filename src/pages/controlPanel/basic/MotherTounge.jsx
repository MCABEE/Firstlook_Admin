import { useState } from "react";
import Button from "../../../components/Button";
import Dropdown from "../../../components/dropDown";
import InputField from "../../../components/inputField";
import { countries, states } from "../../../constants";

const MotherTounge = () => {
  const [selected, setSelected] = useState("add");
  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-md border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-md border border-slate-200";

  return (
    <section className="flex-grow">
      <div className="mt-20 ml-20 w-80">
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

        {/* ADD FORM */}
        {selected === "add" && (
          <form>
            <h2 className="mb-4">Add Mother Tounge</h2>
            <Dropdown
              name={"country"}
              options={countries}
              placeHolder={"Select Country"}
            />
            <Dropdown
              name={"state"}
              options={states}
              placeHolder={"Select State/Province"}
            />
            <InputField
              id={"language"}
              placeholder={"Language"}
              type={"text"}
            />
            <Button
              label={"Save"}
              style={"w-36 rounded-md bg-pink mt-4 text-white py-2 float-right"}
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
              {states.map((state) => (
                <>
                  <span
                    key={state.id}
                    className="py-2 pl-4 bg-slate-300 font-medium rounded-md"
                  >
                    {state.name}
                  </span>
                  {state?.languages?.map((language) => (
                    <div
                      key={language?.id}
                      className="flex justify-between ml-4"
                    >
                      <div className="flex gap-2">
                        <input id="language" type="checkbox" />
                        <label htmlFor="language">{language?.name}</label>
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
};

export default MotherTounge;
