import { useEffect, useState } from "react";
import { deleteCountry, getCountries } from "../../../../services/dataManager";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { toast } from "react-hot-toast";

const ViewAll = () => {
  const [countries, setCountries] = useState([]);
  const [list, setList] = useState([]);

  const fetchCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
    setList(data.countries);
  };

  const searchCountries = (search) => {
    if (search) {
      const searchResult = countries?.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });
      setList(searchResult);
    } else {
      setList(countries);
    }
  };

  const removeCountry = async (id) => {
    await deleteCountry(id);
    toast.success("Deleted Successfully");
    fetchCountries();
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <input
        type="search"
        placeholder="Search countries..."
        className="border border-gray rounded-xl py-2 px-5 my-2 w-80"
        onChange={(e) => searchCountries(e.target.value)}
      />
      {list.map((country) => (
        <div key={country?._id} className="flex justify-between ml-4">
          <div className="flex gap-2">
            <input id="language" type="checkbox" />
            <label htmlFor="language">{country?.name}</label>
          </div>
          <button
            className="text-slate-500"
            onClick={() => removeCountry(country._id)}
          >
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
