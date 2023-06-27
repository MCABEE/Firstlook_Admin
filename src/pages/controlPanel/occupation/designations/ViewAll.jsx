import { useEffect, useState } from "react";
import {
  deleteDesignation,
  getDesignations,
} from "../../../../services/dataManager";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";
const categories = [
  { id: 1, name: "Business" },
  { id: 2, name: "Government" },
];

const ViewAll = () => {
  const [designations, setDesignations] = useState([]);
  const [category, setCategory] = useState("Business");

  const fetchDesignations = async (category) => {
    const { data } = await getDesignations(category);
    setDesignations(data.designations);
  };

  const removeDesignation = async (id) => {
    await deleteDesignation(id);
    toast.success("Deleted successfully");
    fetchDesignations(category);
  };

  useEffect(() => {
    fetchDesignations(category);
  }, [category]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <select
        name="designation"
        className="border border-gray rounded-xl py-2 px-5 mb-4 w-80"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories?.map((option, index) => (
          <option key={index} value={option?.name}>
            {option?.name}
          </option>
        ))}
      </select>
      <div className="mt-3 flex flex-col gap-3">
        <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
          {category}
        </span>
        {designations.length == 0 ? (
          <p className="text-center">No data to display! Please add.</p>
        ) : (
          designations?.map((designation) => (
            <div key={designation?._id} className="flex justify-between ml-4">
              <div className="flex gap-2">
                <input id="language" type="checkbox" />
                <label htmlFor="language">{designation?.name}</label>
              </div>
              <button
                className="text-slate-500"
                onClick={() => removeDesignation(designation._id)}
              >
                <DeleteForeverOutlinedIcon />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewAll;
