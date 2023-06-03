import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  addCity,
  getCountries,
  getStates,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Cities = () => {
  const [selected, setSelected] = useState("add");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [country, setCounty] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  const listStates = async (country) => {
    const { data } = await getStates(country);
    setStates(data.states);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCity({ stateId: state, city });
    toast.success("City name added!");
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  useEffect(() => {
    listCountries();
  }, []);

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
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Add Cities</h2>
          <Dropdown
            name={"country"}
            options={countries}
            placeHolder={"Select Country"}
            setState={setCounty}
          />
          <DropdownValueId
            name={"state"}
            options={states}
            placeHolder={"Select State/Province"}
            setState={setState}
          />
          <InputField
            id={"city"}
            placeholder={"City Name"}
            type={"text"}
            setState={setCity}
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

export default Cities;
