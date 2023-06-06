/* eslint-disable react/prop-types */

import { Dropdown } from "../../../../components/dropDown";
import { DeleteForeverOutlined } from "@mui/icons-material";
import {
  deleteCity,
  getCities,
  getStatesList,
} from "../../../../services/dataManager";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ViewAll = ({ countries }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const fetchStates = async () => {
    const { data } = await getStatesList("");
    setStates(data.states);
    setStateList(data.states);
  };

  const fetchCities = async () => {
    const { data } = await getCities();
    setCities(data.cities);
    setCitiesList(data.cities);
  };

  // filter base on country
  const filterCountryBased = (country) => {
    if (country) {
      setStateList(states.filter((state) => state.country === country));
      setCitiesList(cities.filter((city) => city._id.country === country));
    } else {
      setStateList(states);
      setCitiesList(cities);
    }
  };

  // filter based on state
  const filterStateBased = (state) => {
    if (state) {
      setCitiesList(cities.filter((city) => city._id.state === state));
    } else {
      setCitiesList(cities);
    }
  };

  const removeCity = async (id) => {
    await deleteCity(id);
    toast.success("Deleted Successfully");
    fetchCities();
  };

  useEffect(() => {
    fetchStates();
    fetchCities();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={filterCountryBased}
      />

      <Dropdown
        name={"state"}
        options={stateList}
        placeHolder={"Select state"}
        setState={filterStateBased}
      />

      <div className="mt-3 flex flex-col gap-3">
        {citiesList?.map((item) => (
          <>
            <span
              key={item?._id.state}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {`${item?._id.state} - ${item?._id.country}`}
            </span>
            {item?.cities?.map((city) => (
              <div
                key={city._id}
                className="flex justify-between items-center ml-4"
              >
                <div className="flex gap-2">
                  <input id={"name"} type="checkbox" />
                  <label htmlFor={"name"}>{city.name}</label>
                </div>
                <button
                  onClick={() => removeCity(city._id)}
                  className="text-slate-500"
                >
                  <DeleteForeverOutlined />
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
