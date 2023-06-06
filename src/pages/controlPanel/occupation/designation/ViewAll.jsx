/* eslint-disable react/prop-types */
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown } from "../../../../components/dropDown";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  deleteDesignation,
  getDesignation,
} from "../../../../services/dataManager";

const ViewAll = ({ streams }) => {
  const [designations, setDesignations] = useState([]);
  const [designationList, setDesignationList] = useState([]);

  const fetchDesignation = async () => {
    const { data } = await getDesignation();
    setDesignations(data.designations);
    setDesignationList(data.designations);
  };

  const filterDesignation = (stream) => {
    stream
      ? setDesignationList(
          designations.filter((designation) => designation._id === stream)
        )
      : setDesignationList(designations);
  };

  const removeDesignation = async (id) => {
    try {
      await deleteDesignation(id);
      toast.success("Deleted successfully");
      fetchDesignation();
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  useEffect(() => {
    fetchDesignation();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={filterDesignation}
      />

      <div className="mt-3 flex flex-col gap-3">
        {designationList?.map((stream) => (
          <>
            <span
              key={stream._id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {stream._id}
            </span>
            {stream?.designations?.map((designation) => (
              <div key={designation?._id} className="flex justify-between ml-4">
                <div className="flex gap-2">
                  <input id="designation" type="checkbox" />
                  <label htmlFor="designation">{designation?.name}</label>
                </div>
                <button
                  className="text-slate-500"
                  onClick={() => removeDesignation(designation._id)}
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
