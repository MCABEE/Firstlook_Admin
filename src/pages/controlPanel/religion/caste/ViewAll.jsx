/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { getCastes, deleteCaste } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ religions }) => {
  const [castes, setCastes] = useState([]);
  const [religion, setReligion] = useState("");

  const listCastes = async (religion) => {
    const { data } = await getCastes(religion);
    setCastes(data.castes);
  };

  const removeCaste = async (caste) => {
    await deleteCaste(caste);
    toast.success("Deleted Successfully!");
    listCastes(religion)
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

      <div className="mt-3 flex flex-col gap-3">
        {castes?.map((religion) => (
          <>
            <span
              key={religion?._id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {religion._id}
            </span>
            {religion?.castes?.map((name, index) => (
              <div
                key={name + index}
                className="flex justify-between items-center ml-4"
              >
                <div className="flex gap-2">
                  <input id={name} type="checkbox" />
                  <label htmlFor={name}>{name}</label>
                </div>
                <button
                  onClick={() => removeCaste(name)}
                  className="text-slate-500"
                >
                  <DeleteForeverOutlinedIcon />
                </button>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
