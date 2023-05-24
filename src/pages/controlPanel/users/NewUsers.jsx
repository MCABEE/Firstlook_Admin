import { useState } from "react";
import { DataTable } from "../../../components/dataTable";
import Dropdown from "../../../components/dropDown";
import { Modal } from "../../../components/modal";

const columns = [
  { field: "id", headerName: "No", width: 80 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "gender", headerName: "Gender", width: 110 },
  { field: "state", headerName: "State", width: 150 },
  { field: "district", headerName: "District", width: 150 },
  { field: "religion", headerName: "Religion", width: 130 },
  { field: "join", headerName: "Reg. Date", width: 150 },
];

const rows = [
  {
    id: 1,
    gender: "Male",
    firstName: "Jon",
    state: "Kerala",
    district: "Eranakulam",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 2,
    gender: "Female",
    firstName: "Cersei",
    state: "Kerala",
    district: "Eranakulam",
    religion: "Hindu",
    join: "12/05/2023",
  },
  {
    id: 3,
    gender: "Male",
    firstName: "Jaime",
    state: "Kerala",
    district: "Kollam",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 4,
    gender: "Male",
    firstName: "Arya",
    state: "Kerala",
    district: "Eranakulam",
    religion: "Muslim",
    join: "12/05/2023",
  },
  {
    id: 5,
    gender: "Male",
    firstName: "Daenerys",
    state: "Kerala",
    district: "Kottayam",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 6,
    gender: "Female",
    firstName: "null",
    state: "Kerala",
    district: "Malappuram",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 7,
    gender: "Female",
    firstName: "Ferrara",
    state: "Kerala",
    district: "Eranakulam",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 8,
    gender: "Female",
    firstName: "Rossini",
    state: "Kerala",
    district: "Thrissure",
    religion: "Christian",
    join: "12/05/2023",
  },
  {
    id: 9,
    gender: "Male",
    firstName: "Harvey",
    state: "Kerala",
    district: "Eranakulam",
    religion: "Christian",
    join: "12/05/2023",
  },
];
const NewUsers = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const dropdownStyle = "border border-gray rounded-xl py-2 px-5 my-2 w-44"

  return (
    <>
      {/* Total users and Filters */}
      <div className="flex gap-1 overflow-auto items-start">
        <div>
          <div className="p-2 rounded-xl text-center text-white bg-gradient-to-r from-pink to-yellow-500 ">
            <p className="text-xs">New Users</p>
            <h2>2410</h2>
          </div>
        </div>
        <div className="px-3">
          <h2 className="font-medium text-sm">Apply Filter</h2>
          <div className="flex flex-wrap w-full gap-2">
            <Dropdown style={dropdownStyle} placeHolder="State" />
            <Dropdown style={dropdownStyle} placeHolder="District" />
            <Dropdown style={dropdownStyle} placeHolder="Gender" />
            <Dropdown style={dropdownStyle} placeHolder="Religion" />
            <Dropdown style={dropdownStyle} placeHolder="Caste" />
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white mt-10 p-2 rounded-md">
        <div className="flex justify-between py-2">
          <div className="p-2 text-center">
            <p>
              Filtered Result : <span className="text-lg font-bold">369</span>{" "}
            </p>
          </div>
          <button
            onClick={handleClickOpen}
            className="bg-pink px-3 rounded-xl text-white text-sm"
          >
            Send Notification
          </button>
        </div>

        <DataTable rows={rows} columns={columns} />
      </div>
     <Modal open={open} handleClose={handleClose} />
    </>
  );
};

export default NewUsers;
