import { useEffect, useState } from "react";
import { DataTable } from "../../../../components/dataTable";
import {
  deleteAdminPost,
  getAdminPots,
} from "../../../../services/dataManager";
import EditPost from "./EditPost";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  setAdminPosts,
  setSelectedPost,
} from "../../../../redux/slices/adminPostSlice";

const ViewPost = () => {
  const { adminPosts, update } = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "No", width: 90 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "landingPage", headerName: "Landing Page", width: 130 },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 130,
      renderCell: (params) => {
        return params.row.startDate.slice(0, 10);
      },
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 130,
      renderCell: (params) => {
        return params.row.endDate.slice(0, 10);
      },
    },
    {
      field: "hide",
      headerName: "View/Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => handleSelect(params.row)}
            className="py-1 px-3 rounded-md bg-slate-500 text-white"
          >
            Details
          </button>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => deletePost(params.row._id)}
            className="py-1 px-3 rounded-md bg-red-600 text-white"
          >
            Delete
          </button>
        );
      },
    },
  ];

  const feedPostRows = adminPosts?.map((post, index) => {
    return { id: index + 1, ...post };
  });

  const handleSelect = (post) => {
    dispatch(setSelectedPost(post));
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const fetchPosts = async () => {
    const { data } = await getAdminPots();
    dispatch(setAdminPosts(data.posts));
  };

  const deletePost = (id) => {
    try {
      toast
        .promise(deleteAdminPost(id), {
          loading: "Deleting...",
          success: "Deleted Successfully",
          error: "Deletion failed!",
        })
        .then(() => fetchPosts());
    } catch (error) {
      toast.error("Something went wrong! Try again.");
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return (
    <div>
      {adminPosts.length ? (
        <>
          {/* <h2 className="mb-2 ml-2">View All Posts</h2> */}
          <div className="bg-white">
            <DataTable
              rows={feedPostRows}
              columns={columns}
              showCheckbox={false}
            />
          </div>
        </>
      ) : (
        <h4 className="text-center">Loading....</h4>
      )}
      {show && <EditPost open={show} handleClose={handleClose} />}
    </div>
  );
};

export default ViewPost;
