import { useEffect, useState } from "react";
import { deleteReligion, getReligions } from "../../../../services/dataManager";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";

const ViewAll = () => {
  const [religions, setReligions] = useState([]);
  const [list, setList] = useState([]);

  const fetchReligion = async () => {
    const { data } = await getReligions();
    setReligions(data.religions);
    setList(data.religions);
  };

  const searchReligion = (search) => {
    search
      ? setList(
          religions.filter((religion) =>
            religion.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setList(religions);
  };

  const removeReligion = async (id) => {
    await deleteReligion(id);
    toast.success("Deleted successfully");
    fetchReligion();
  };

  useEffect(() => {
    fetchReligion();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <input
        type="search"
        placeholder="Search religion..."
        className="border border-gray rounded-xl py-2 px-5 my-2 w-80"
        onChange={(e) => searchReligion(e.target.value)}
      />
      {list?.map((religion) => (
        <div key={religion?._id} className="flex justify-between ml-4">
          <div className="flex gap-2">
            <input id="language" type="checkbox" />
            <label htmlFor="language">{religion?.name}</label>
          </div>
          <button
            className="text-slate-500"
            onClick={() => removeReligion(religion._id)}
          >
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
