import { useEffect, useState } from "react";
import { deleteStream, getStreams } from "../../../../services/dataManager";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";

const ViewAll = () => {
  const [streams, setStreams] = useState([]);
  const [list, setList] = useState([]);

  const fetchStreams = async () => {
    const { data } = await getStreams();
    setStreams(data.streams);
    setList(data.streams);
  };

  const searchReligion = (search) => {
    search
      ? setList(
          list.filter((religion) =>
            religion.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setList(streams);
  };

  const removeStream = async (id) => {
    await deleteStream(id);
    toast.success("Deleted successfully");
    fetchStreams();
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <input
        type="search"
        placeholder="Search stream..."
        className="border border-gray rounded-xl py-2 px-5 my-2 w-80"
        onChange={(e) => searchReligion(e.target.value)}
      />
      {list?.map((stream) => (
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
  );
};

export default ViewAll;
