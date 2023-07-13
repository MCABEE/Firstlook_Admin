import { Pagination } from "@mui/material";
import { Dropdown } from "../../../components/dropDown";
import PhotoDetails from "./PhotoDetails";
import { useState, useEffect } from "react";
import { getImagePosts } from "../../../services/postRoutes";
import dateFormat from "dateformat";
import Loading from "../../../components/loadingCard/Loading";

const AllPhotos = () => {
  const dropdownStyle = "border border-gray rounded-xl py-2 px-5 my-2 w-40";
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const fetchPosts = async () => {
    const { data } = await getImagePosts();
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      <PhotoDetails handleClose={handleClose} post={selectedPost} open={open} />
      {/* Total users and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div>
          <div className="p-2 rounded-xl text-center border text-gray-dark w-28">
            <p className="text-xs">All Photos</p>
            <h2>8232</h2>
          </div>
        </div>
        <div className="px-3">
          <h2 className="font-medium text-sm text-gray-dark">Apply Filter</h2>
          <form>
            <div className="flex flex-wrap items-center gap-2">
              <Dropdown style={dropdownStyle} placeHolder="State" />
              <Dropdown style={dropdownStyle} placeHolder="District" />
              <Dropdown style={dropdownStyle} placeHolder="Gender" />
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

      {/* Photo list */}
      <div className="bg-white mt-10 p-2 rounded-md max-w-7xl">
        <p className="mb-2">
          Filtered Result : <span className="text-lg font-bold">{323}</span>
        </p>
        <div className="flex gap-2 flex-wrap">
          {posts.length === 0 ? (
            <Loading times={25} />
          ) : (
            posts?.map((post) => (
              <div
                key={post?._id}
                className="p-1 shadow-md hover:scale-105 transition-all cursor-pointer"
                onClick={() => handleClickOpen(post)}
              >
                <img
                  src={post?.content.url}
                  alt="photo"
                  className="h-28 w-24 object-cover"
                />
                <small className="text-slate-400">
                  {dateFormat(post.createdAt, "longDate")}
                </small>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </section>
  );
};

export default AllPhotos;
