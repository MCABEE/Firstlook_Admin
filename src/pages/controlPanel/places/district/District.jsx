import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { DropdownValueId, Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import {
  getCountries,
  getStates,
  addDistrict,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const District = () => {
  const [selected, setSelected] = useState("add");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [country, setCounty] = useState("");
  const [district, setDistrict] = useState("");

  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";

  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  const listStates = async (country) => {
    const { data } = await getStates(country);
    setStates(data.states);
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  useEffect(() => {
    listCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDistrict({ stateId:state, district });
    toast.success("District added!");
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
          <h2 className="mb-4">Add District</h2>
          <Dropdown
            name={"country"}
            options={countries}
            placeHolder={"Select Country"}
            setState={setCounty}
          />
          <DropdownValueId
            name={"state"}
            options={states}
            placeHolder={"Select State"}
            setState={setState}
          />
          <InputField
            id={"State"}
            placeholder={"District Name"}
            type={"text"}
            setState={setDistrict}
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

export default District;
