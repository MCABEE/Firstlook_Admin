import { useEffect, useState } from "react";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import {
  addHomeTown,
  getCountries,
  getDistricts,
  getStates,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const HomeTown = () => {
  const [selected, setSelected] = useState("add");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [country, setCounty] = useState("");
  const [stateId, setStateId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [homeTown, setHomeTown] = useState("");

  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  const listStates = async (country) => {
    const { data } = await getStates(country);
    setStates(data.states);
  };

  const listDistricts = async (stateId) => {
    const { data } = await getDistricts(stateId);
    setDistricts(data.districts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addHomeTown({ district: districtId, homeTown });
    toast.success("Hometown added!");
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  useEffect(() => {
    listDistricts(stateId);
  }, [stateId]);

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
          <h2 className="mb-4">Add Home Town</h2>
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
            setState={setStateId}
          />
          <DropdownValueId
            name={"district"}
            options={districts}
            placeHolder={"Select District"}
            setState={setDistrictId}
          />
          <InputField
            id={"homeTown"}
            placeholder={"Home Town Name"}
            type={"text"}
            setState={setHomeTown}
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

export default HomeTown;
