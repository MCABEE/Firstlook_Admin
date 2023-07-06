/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  deleteInstitution,
  getInstitutions,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ countries }) => {
  const [colleges, setColleges] = useState([]);
  const [country, setCountry] = useState("");

  const listColleges = async (country) => {
    const { data } = await getInstitutions("college", country);
    setColleges(data.institutions);
  };

  const removeCollege = async (id) => {
    await deleteInstitution("college", id);
    toast.success("Deleted Successfully!");
    listColleges(country);
  };

  useEffect(() => {
    listColleges(country);
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

      {colleges?.map((country) => (
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
                onClick={() => removeCollege(institution._id)}
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
