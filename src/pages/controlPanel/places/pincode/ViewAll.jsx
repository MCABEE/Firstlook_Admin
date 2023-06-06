import { useEffect, useState } from "react";
import { Dropdown, DropdownValueId } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
    deletePincode,
  getDistrictsList,
  getPincodes,
  getStatesList,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsList, setDistrictsList] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [pincodesList, setPincodesList] = useState([]);

  const fetchPincodes = async () => {
    const { data } = await getPincodes();
    setPincodes(data.pincodes);
    setPincodesList(data.pincodes)
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
  const filterPincodes = (district) => {
    if (district) {
      setPincodesList(pincodes.filter((code) => code._id.district == district));
    } else {
      setPincodesList(pincodes);
    }
  };

  // filter base on state
  const filterDistricts = (stateId) => {
    if (stateId) {
      setDistrictsList(
        districts.filter((district) => district.state == stateId)
      );
      setPincodesList(pincodes.filter((code) => code._id.state == stateId));
    } else {
      setDistrictsList(districts);
      setPincodesList(pincodes);
    }
  };

    const removePincode = async (id) => {
      await deletePincode(id);
      toast.success("Deleted successfully");
      fetchPincodes();
    };

  useEffect(() => {
    fetchPincodes();
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
        setState={filterPincodes}
      />

      <div className="mt-3 flex flex-col gap-3">
        {pincodesList?.map((item) => (
          <>
            <span
              key={item?._id.state}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {`${item?._id.district}`}
            </span>
            {item?.pincodes?.map((pincode) => (
              <div
                key={pincode._id}
                className="flex justify-between items-center ml-4"
              >
                <div className="flex gap-2">
                  <input id={"name"} type="checkbox" />
                  <label htmlFor={"name"}>
                    {pincode.code} - {pincode.postOffice}
                  </label>
                </div>
                <button
                    onClick={() => removePincode(pincode._id)}
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
