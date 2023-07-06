/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { getCastes, deleteCaste } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ religions }) => {
  const [castes, setCastes] = useState([]);
  const [religion, setReligion] = useState(religions[0]?.name ?? "");

  const listCastes = async (religion) => {
    const { data } = await getCastes(religion);
    setCastes(data.castes);
  };

  const removeCaste = async (id) => {
    await deleteCaste(id);
    toast.success("Deleted Successfully!");
    listCastes(religion);
  };

  useEffect(() => {
    listCastes(religion);
  }, [religion]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"religion"}
        options={religions}
        placeHolder={"Select Religion"}
        setState={setReligion}
      />

      {castes?.map((religion) => (
        <div key={religion?._id} className="mt-3 flex flex-col">
          <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
            {religion._id}
          </span>
          {religion?.castes?.map((caste) => (
            <div
              key={caste?._id}
              className="flex justify-between items-center ml-4"
            >
              <div className="flex gap-2">
                <input id={caste?.name} type="checkbox" />
                <label htmlFor={caste?.name}>{caste?.name}</label>
              </div>
              <button
                onClick={() => removeCaste(caste?._id)}
                className="text-slate-500"
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
