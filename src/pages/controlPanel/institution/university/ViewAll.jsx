/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";
import {
  deleteInstitution,
  getInstitutions,
} from "../../../../services/dataManager";

const ViewAll = ({ countries }) => {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState("");

  const listUniversities = async (country) => {
    const { data } = await getInstitutions("university", country);
    setUniversities(data.institutions);
  };

  const removeUniversity = async (id) => {
    await deleteInstitution("university", id);
    toast.success("Deleted Successfully!");
    listUniversities(country);
  };

  useEffect(() => {
    listUniversities(country);
  }, [country]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />

      {universities?.map((country) => (
        <div key={country._id} className="mt-3 flex flex-col">
          <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
            {country._id}
          </span>
          {country?.institutions.map((institution) => (
            <div key={institution._id} className="flex justify-between ml-4">
              <div className="flex gap-2 overflow-hidden">
                <input id="college" type="checkbox" />
                <label htmlFor="college">{institution.name}</label>
              </div>
              <button
                className="text-slate-500"
                onClick={() => removeUniversity(institution._id)}
              >
                <DeleteForeverOutlinedIcon />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
