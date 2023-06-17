import { useState } from "react";
import UserDetails from "./UserDetails";
import Posts from "./Posts";
import Payments from "./Payments";
import Reports from "./Reports";
import Ids from "./Ids";

const UserProfile = () => {
  const [selected, setSelected] = useState("details");
  return (
    <section>
      <div className="bg-white p-4 rounded-md flex flex-col gap-4 md:flex-row justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="userphoto"
            className="h-16 w-16 object-cover rounded-full"
          />
          <div>
            <p className="font-medium">User Name</p>
            <p className="text-xs">Joined at 10 May 2023</p>
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
        {selected === "details" && <UserDetails />}
        {selected === "ids" && <Ids />}
        {selected === "posts" && <Posts />}
        {selected === "payments" && <Payments />}
        {selected === "reports" && <Reports />}
      </div>
    </section>
  );
};

export default UserProfile;
