/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { deleteState, getStates } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState("");

  const fetchStates = async (country) => {
    const { data } = await getStates(country);
    setStates(data.states);
  };

  const removeState = async (id) => {
    try {
      await deleteState(id);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchStates(country);
  }, [country]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />

      <div className="mt-3 flex flex-col gap-3">
        {states?.map((country) => (
          <>
            <span
              key={country?._id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {country?._id}
            </span>
            {country?.states?.map((state) => (
              <div
                key={state._id}
                className="flex justify-between items-center ml-4"
              >
                <div className="flex gap-2">
                  <input id={"name"} type="checkbox" />
                  <label htmlFor={"name"}>{state.name}</label>
                </div>
                <button
                  onClick={() => removeState(state._id)}
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
