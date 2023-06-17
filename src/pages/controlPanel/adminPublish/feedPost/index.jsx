import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const FeedPost = () => {
  const [selected, setSelected] = useState("add");

  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";

  return (
    <section>
      <div className="grid place-content-center my-8">
        <div className="flex justify-center gap-5 mb-10">
          <Link
            to={"/controlPanel/feedPost"}
            onClick={() => setSelected("add")}
            className={selected === "add" ? selectedLink : nonSelectedLink}
          >
            Add
          </Link>
          <Link
            to={"/controlPanel/feedPost/viewAll"}
            onClick={() => setSelected("viewAll")}
            className={selected === "viewAll" ? selectedLink : nonSelectedLink}
          >
            View all
          </Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default FeedPost;
