import { useState } from "react";
import {Dropdown} from "../../../../components/dropDown";
import { DataTable } from "../../../../components/dataTable";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import { rows } from "../../../../lib/constants";
import { useNavigate } from "react-router-dom";

const IdVerification = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "No", width: 90 },
    { field: "firstName", headerName: "First name", width: 140 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "state", headerName: "State", width: 130 },
    { field: "district", headerName: "District", width: 130 },
    { field: "religion", headerName: "Religion", width: 130 },
    { field: "join", headerName: "Reg. Date", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => navigate(`/controlPanel/idVerification/${params.row.id}`)}
            className="border py-1 px-3 rounded-md"
          >
            View
          </button>
        );
      },
    },
  ];

  const dropdownStyle = "border border-gray rounded-xl py-2 px-5 my-2 w-40";

  return (
    <section>
      {/* Total users and Filters */}
      <div className="flex md:flex-row flex-col gap-1 overflow-auto items-start">
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
              <Dropdown style={dropdownStyle} placeHolder="Year" />
              <Dropdown style={dropdownStyle} placeHolder="Month" />
              <div>
                <button className="border rounded-xl text-white bg-pink h-[40px] px-2 ">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white mt-10 p-2 rounded-md max-w-5xl">
        <div className="flex justify-between py-2">
          <div className="p-2 text-center ">
            <p>
              Filtered Result :{" "}
              <span className="text-lg font-bold">{rows.length}</span>{" "}
            </p>
          </div>
          <button
            onClick={handleClickOpen}
            className="bg-pink px-3 rounded-xl text-white text-sm"
          >
            Send Notification
          </button>
        </div>

        <DataTable rows={rows} columns={columns} showCheckbox={true}/>
      </div>

      {/* Notification Modal */}
      <NotificationModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default IdVerification;
