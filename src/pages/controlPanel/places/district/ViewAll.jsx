/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  deleteDistrict,
  getDistricts,
  getStatesList,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [country, setCountry] = useState("");
  const [stateId, setStateId] = useState("");

  const listDistricts = async (stateId) => {
    const { data } = await getDistricts(stateId);
    setDistricts(data.districts);
  };

  const listStates = async (country) => {
    const { data } = await getStatesList(country);
    setStates(data.states);
  };

  const removeDistrict = async (id) => {
    try {
      await deleteDistrict(id);
      toast.success("Deleted successfully");
      listDistricts(stateId);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  useEffect(() => {
    listStates(country);
  }, [country]);

  useEffect(() => {
    listDistricts(stateId);
  }, [stateId]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />

      <DropdownValueId
        name={"state"}
        options={states}
        placeHolder={"Select state"}
        setState={setStateId}
      />

      <div className="mt-3 flex flex-col gap-3">
        {districts?.map((item) => (
          <>
            <span
              key={item?._id.country}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {`${item?._id.state} - ${item?._id.country}`}
            </span>
            {item?.districts?.map((district) => (
              <div
                key={district._id}
                className="flex justify-between items-center ml-4"
              >
                <div className="flex gap-2">
                  <input id={"name"} type="checkbox" />
                  <label htmlFor={"name"}>{district.name}</label>
                </div>
                <button
                  onClick={() => removeDistrict(district._id)}
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
