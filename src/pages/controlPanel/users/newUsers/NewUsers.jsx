import { useEffect, useState } from "react";
import { DataTable } from "../../../../components/dataTable";
import { Dropdown } from "../../../../components/dropDown";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import { useNavigate } from "react-router-dom";
import { getNewUsers } from "../../../../services/userServices";

const NewUsers = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const fetchUsers = async () => {
    const { data } = await getNewUsers();
    setUsers(data.users);
  };

  const userRows = users?.map((user, index) => {
    return { id: index + 1, ...user };
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "No", width: 90 },
    { field: "displayName", headerName: "User name", width: 140 },
    { field: "gender", headerName: "Gender", width: 100 },
    {
      field: "state",
      headerName: "State",
      width: 130,
      renderCell: (params) => {
        return params.row.native?.state;
      },
    },
    {
      field: "district",
      headerName: "District",
      width: 130,
      renderCell: (params) => {
        return params.row.native?.district;
      },
    },
    {
      field: "religion",
      headerName: "Religion",
      width: 130,
      renderCell: (params) => {
        return params.row.personalInfo?.religion;
      },
    },
    {
      field: "createdAt",
      headerName: "Reg. Date",
      width: 130,
      renderCell: (params) => {
        return params.row.createdAt.slice(0, 10);
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => navigate(`/controlPanel/allUsers/${params.row._id}`)}
            className="border py-1 px-3 rounded-md"
          >
            View
          </button>
        );
      },
    },
  ];

  const dropdownStyle = "border border-gray rounded-xl py-2 px-5 mt-2 w-40";

  return (
    <section>
      {/* Total users and Filters */}
      <div className="flex md:flex-row flex-col gap-1 overflow-auto items-start">
        <div>
          <div className="p-2 rounded-xl text-center border text-gray-dark w-28">
            <p className="text-xs">New Users</p>
            <h2>{users.length || '---'}</h2>
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
              <div>
                <button className="border rounded-xl text-white bg-pink h-[40px] px-2 mt-2">
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
          <div className="p-2 text-center">
            <p>
              Filtered Result :{" "}
              <span className="text-lg font-bold">{users.length || '---'}</span>{" "}
            </p>
          </div>
          <button
            onClick={handleClickOpen}
            className="bg-pink px-3 rounded-xl text-white text-sm"
          >
            Send Notification
          </button>
        </div>

        <DataTable rows={userRows} columns={columns} showCheckbox={true} />
      </div>

      {/* Notification Modal */}
      <NotificationModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default NewUsers;
