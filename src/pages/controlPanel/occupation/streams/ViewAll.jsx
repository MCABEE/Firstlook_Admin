import { useEffect, useState } from "react";
import {
  deleteOccpationStream,
  getOccupationStreams,
} from "../../../../services/dataManager";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";
import { Dropdown } from "../../../../components/dropDown";
import { streamCategories } from "../../../../lib/constants";

const ViewAll = () => {
  const [streams, setStreams] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchStreams = async (category) => {
    const { data } = await getOccupationStreams(category);
    setStreams(data.occupationStreams);
  };

  const removeStream = async (id) => {
    await deleteOccpationStream(id);
    toast.success("Deleted successfully");
    fetchStreams(category);
  };

  useEffect(() => {
    fetchStreams(category);
  }, [category]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"category"}
        setState={setCategory}
        options={streamCategories}
        placeHolder={"Select a category"}
      />
      {streams?.map((category) => (
        <div key={category._id} className="mt-3 flex flex-col">
          <span
            className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
          >
            {category._id}
          </span>
          {category?.streams?.map((stream) => (
            <div key={stream?._id} className="flex justify-between ml-4">
              <div className="flex gap-2">
                <input id="language" type="checkbox" />
                <label htmlFor="language">{stream?.name}</label>
              </div>
              <button
                className="text-slate-500"
                onClick={() => removeStream(stream._id)}
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
