import { DataTable } from "../../../../components/dataTable";
import { feedPostRows } from "../../../../lib/constants";

const columns = [
  { field: "id", headerName: "No", width: 90 },
  { field: "startDate", headerName: "Start Date", width: 130 },
  { field: "endDate", headerName: "End Date", width: 130 },
  { field: "landingPage", headerName: "Landing Page", width: 130 },
  { field: "audienceDetails", headerName: "Audience Details", width: 180 },
  {
    field: "hide",
    headerName: "Hide Post",
    width: 100,
    renderCell: () => {
      return (
        <button
          className="py-1 px-3 rounded-md bg-slate-500 text-white"
        >
          Hide
        </button>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: () => {
      return (
        <button
          className="py-1 px-3 rounded-md bg-red-600 text-white"
        >
          Remove
        </button>
      );
    },
  },
];

const ViewPost = () => {
  return (
    <div>
      <h2 className="mb-2">View All Posts</h2>
      <div className="bg-white">
        <DataTable rows={feedPostRows} columns={columns} showCheckbox={false} />
      </div>
    </div>
  );
};

export default ViewPost;
