import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import Posts from "./Posts";
import Payments from "./Payments";
import Reports from "./Reports";
// import Ids from "./Ids";
import { getUserDetails } from "../../../../../services/userServices";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import avatar from "../../../../../assets/user_avatar.png";

const UserProfile = () => {
  const [selected, setSelected] = useState("details");
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const fetchUserDetails = async (userId) => {
    const { data } = await getUserDetails(userId);
    setUser(data.user);
  };

  useEffect(() => {
    fetchUserDetails(userId);
  }, [userId]);

  return (
    <section>
      <div className="bg-white p-4 rounded-md flex flex-col gap-4 md:flex-row justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={user?.profileImage?.url || avatar}
            alt={'photo'}
            className="h-16 w-16 object-cover bg-slate-300 rounded-full"
          />
          <div>
            <p className="font-medium">{user?.displayName}</p>
            <p className="text-xs">{dateFormat(user?.createdAt, "longDate")}</p>
          </div>
        </div>
        <div>
          <ul className="flex gap-5 items-cente">
            <li
              onClick={() => setSelected("details")}
              className={`text-slate-500 hover:text-slate-400 cursor-pointer 
              ${selected == "details" && "font-semibold"}`}
            >
              Details
            </li>
            <li
              onClick={() => setSelected("ids")}
              className={`text-slate-500 hover:text-slate-400 cursor-pointer 
              ${selected == "ids" && "font-semibold"}`}
            >
              IDs
            </li>
            <li
              onClick={() => setSelected("posts")}
              className={`text-slate-500 hover:text-slate-400 cursor-pointer 
              ${selected == "posts" && "font-semibold"}`}
            >
              Posts
            </li>
            <li
              onClick={() => setSelected("payments")}
              className={`text-slate-500 hover:text-slate-400 cursor-pointer 
              ${selected == "payments" && "font-semibold"}`}
            >
              Payments
            </li>
            <li
              onClick={() => setSelected("reports")}
              className={`text-slate-500 hover:text-slate-400 cursor-pointer 
              ${selected == "reports" && "font-semibold"}`}
            >
              Reports
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        {selected === "details" && <UserDetails user={user} />}
        {/* {selected === "ids" && <Ids />} */}
        {selected === "posts" && <Posts />}
        {selected === "payments" && <Payments />}
        {selected === "reports" && <Reports />}
      </div>
    </section>
  );
};

export default UserProfile;
