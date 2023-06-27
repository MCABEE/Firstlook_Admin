/* eslint-disable react/prop-types */
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown } from "../../../../components/dropDown";
import { useState, useEffect } from "react";
import { deleteEmployer, getEmployers } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ categories }) => {
  const [employers, setEmployers] = useState([]);
  const [category, setCategory] = useState("");

  const listEmployers = async (category) => {
    const { data } = await getEmployers(category);
    setEmployers(data.employers);
  };

  const removeEmployer = async (id) => {
    await deleteEmployer(id);
    toast.success("Deleted Successfully!");
    listEmployers(category);
  };

  useEffect(() => {
    listEmployers(category);
  }, [category]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"category"}
        options={categories}
        placeHolder={"Select category"}
        setState={setCategory}
      />

      <div className="mt-3 flex flex-col gap-3">
        {employers.map((item) => (
          <>
            <span
              key={item?._id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {item?._id}
            </span>
            {item?.employers?.map((employer) => (
              <div key={employer?._id} className="flex justify-between ml-4">
                <div className="flex gap-2">
                  <input id="course" type="checkbox" />
                  <label htmlFor="course">{employer?.name}</label>
                </div>
                <button
                  className="text-slate-500"
                  onClick={() => removeEmployer(employer?._id)}
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
