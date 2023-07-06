/* eslint-disable react/prop-types */
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import { useEffect, useState } from "react";
import {
  deleteHomeTown,
  getDistrictsList,
  getHomeTowns,
  getStatesList,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [homeTowns, setHomeTowns] = useState([]);
  const [homeTownsList, setHomeTownsList] = useState([]);
  const [districtsList, setDistrictsList] = useState([]);

  const fetchHometowns = async () => {
    const { data } = await getHomeTowns();
    setHomeTowns(data.homeTowns);
    setHomeTownsList(data.homeTowns);
  };

  const fetchStates = async () => {
    const { data } = await getStatesList("");
    setStates(data.states);
  };

  const fetchDistricts = async () => {
    const { data } = await getDistrictsList("");
    setDistricts(data.districts);
    setDistrictsList(data.districts);
  };

  // filter based on district
  const filterHometowns = (district) => {
    if (district) {
      setHomeTownsList(
        homeTowns.filter((town) => town._id.district == district)
      );
    } else {
      setHomeTownsList(homeTowns);
    }
  };

  // filter base on state
  const filterDistricts = (stateId) => {
    if (stateId) {
      setDistrictsList(
        districts.filter((district) => district.state == stateId)
      );
      setHomeTownsList(homeTowns.filter((town) => town._id.state == stateId));
    } else {
      setDistrictsList(districts);
      setHomeTownsList(homeTowns);
    }
  };

  const removeHometown = async (id) => {
    await deleteHomeTown(id);
    toast.success("Deleted successfully");
    fetchHometowns();
  };

  useEffect(() => {
    fetchHometowns();
    fetchStates();
    fetchDistricts();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <DropdownValueId
        name={"state"}
        options={states}
        placeHolder={"Select state"}
        setState={filterDistricts}
      />
      <Dropdown
        name={"district"}
        options={districtsList}
        placeHolder={"Select district"}
        setState={filterHometowns}
      />

      {homeTownsList?.map((item) => (
        <div key={item?._id.state} className="mt-3 flex flex-col">
          <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
            {`${item?._id.district}`}
          </span>
          {item?.homeTowns?.map((town) => (
            <div
              key={town._id}
              className="flex justify-between items-center ml-4"
            >
              <div className="flex gap-2">
                <input id={"name"} type="checkbox" />
                <label htmlFor={"name"}>{town.name}</label>
              </div>
              <button
                onClick={() => removeHometown(town._id)}
                className="text-slate-500"
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
