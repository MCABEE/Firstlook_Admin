/* eslint-disable react/prop-types */
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  deleteDesignation,
  getDesignation,
  getOccupationStreamsList,
} from "../../../../services/dataManager";
import { streamCategories } from "../../../../lib/constants";

const ViewAll = () => {
  const [streams, setStreams] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [category, setCategory] = useState("");
  const [streamId, setStreamId] = useState("");

  const fetchDesignation = async (streamId) => {
    const { data } = await getDesignation(streamId);
    setDesignations(data.designations);
  };

  const removeDesignation = async (id) => {
    try {
      await deleteDesignation(id);
      toast.success("Deleted successfully");
      fetchDesignation(streamId);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const listStreams = async (category) => {
    const { data } = await getOccupationStreamsList(category);
    setStreams(data.occupationStreams);
  };

  useEffect(() => {
    listStreams(category);
  }, [category]);

  useEffect(() => {
    fetchDesignation(streamId);
  }, [streamId]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"category"}
        options={streamCategories}
        placeHolder={"Select a category"}
        setState={setCategory}
      />
      <DropdownValueId
        name={"stream"}
        options={streams}
        placeHolder={"Select Stream"}
        setState={setStreamId}
      />

      <div className="mt-3 flex flex-col gap-3">
        {designations?.map((category) => (
          <>
            <span
              key={category?._id?.category}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {category?._id?.stream}
            </span>
            {category?.designations?.map((designation) => (
              <div key={designation?._id} className="flex justify-between ml-4">
                <div className="flex gap-2">
                  <input id="designation" type="checkbox" />
                  <label htmlFor="designation">{designation?.name}</label>
                </div>
                <button
                  className="text-slate-500"
                  onClick={() => removeDesignation(designation?._id)}
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
