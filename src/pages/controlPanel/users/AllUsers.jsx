import { useState } from "react";
import { DataTable } from "../../../components/dataTable";
import Dropdown from "../../../components/dropDown";
import { Modal } from "../../../components/modal";
import { rows, columns } from "../../../constants";

const AllUsers = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dropdownStyle = "border border-gray rounded-xl py-2 px-5 my-2 w-40";

  return (
    <>
      {/* Total users and Filters */}
      <div className="flex gap-1 overflow-auto items-start">
        <div>
          <div className="p-2 rounded-xl text-center border text-gray-dark w-28">
            <p className="text-xs">All Users</p>
            <h2>64232</h2>
          </div>
        </div>
        <div className="px-3">
          <h2 className="font-medium text-sm text-gray-dark">Apply Filter</h2>
          <form>
            <div className="flex flex-wrap items-center gap-2">
              <Dropdown style={dropdownStyle} placeHolder="State" />
              <Dropdown style={dropdownStyle} placeHolder="District" />
              <Dropdown style={dropdownStyle} placeHolder="Gender" />
              <Dropdown style={dropdownStyle} placeHolder="Religion" />
              <Dropdown style={dropdownStyle} placeHolder="Caste" />
              <Dropdown style={dropdownStyle} placeHolder="Year" />
              <Dropdown style={dropdownStyle} placeHolder="Month" />
              <div>
                <button className="border rounded-xl text-white bg-pink h-[40px] px-2">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white mt-10 p-2 rounded-md">
        <div className="flex justify-between py-2">
          <div className="p-2 text-center ">
            <p>
              Filtered Result : <span className="text-lg font-bold">360</span>{" "}
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

export default AllUsers;
