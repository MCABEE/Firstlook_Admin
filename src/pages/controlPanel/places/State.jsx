import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/inputField";
import {Dropdown} from "../../../components/dropDown";
import { getCountries, addState } from "../../../services/dataManager";
import { toast } from "react-hot-toast";

const State = () => {
  const [selected, setSelected] = useState("add");
  const [countries, setCountries] = useState([]);
  const [country, setCounty] = useState("");
  const [state, setState] = useState("");
  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";

  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  useEffect(() => {
    listCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addState({ country, state });
    toast.success("State added!");
  };

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
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Add State</h2>
          <Dropdown
            name={"state"}
            options={countries}
            placeHolder={"Select Country"}
            setState={setCounty}
          />
          <InputField
            id={"State"}
            placeholder={"State Name"}
            type={"text"}
            setState={setState}
          />
          <Button
            label={"Save"}
            style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
          />
        </form>
      </div>
    </section>
  );
};

export default State;
