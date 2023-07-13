import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import { DataTable } from "../../../../components/dataTable";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import { useNavigate } from "react-router-dom";
import { getIdVerificationUsers } from "../../../../services/userServices";

const IdVerification = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const fetchUsers = async () => {
    const { data } = await getIdVerificationUsers();
    setUsers(data.users);
    setTotalUsers(data.count);
  };

  const userRows = users?.map((user, index) => {
    console.log(user);
    return { id: index + 1, ...user };
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "No", width: 90 },
    {
      field: "displayName",
      headerName: "User name",
      width: 140,
      renderCell: (params) => {
        return params.row.userId?.displayName;
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
      renderCell: (params) => {
        return params.row.userId?.gender;
      },
    },
    {
      field: "state",
      headerName: "State",
      width: 130,
      renderCell: (params) => {
        return params.row.userId?.native?.state;
      },
    },
    {
      field: "district",
      headerName: "District",
      width: 130,
      renderCell: (params) => {
        return params.row.userId?.native?.district;
      },
    },
    {
      field: "religion",
      headerName: "Religion",
      width: 130,
      renderCell: (params) => {
        return params.row.userId?.personalInfo?.religion;
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
            onClick={() => navigate(`/controlPanel/IdVerification/${params.row.userId?._id}`)}
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
            <p className="text-xs">ID Not Verified</p>
            <h2>{totalUsers || "---"}</h2>
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
              <span className="text-lg font-bold">{users.length}</span>{" "}
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

export default IdVerification;
