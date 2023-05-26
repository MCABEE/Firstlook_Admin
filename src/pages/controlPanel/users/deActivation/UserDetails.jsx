import Avatar from "../../../../assets/user_avatar.png";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import { useState } from "react";

const UserDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="grid place-content-center">
      {/* Basic information */}
      <div className="bg-white shadow-sm p-5 max-w-5xl rounded-md flex flex-col gap-3 justify-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={Avatar}
            alt="avatar"
            className="rounded-full w-20 h-20 object-cover"
          />
          <h4>Tom Joseph</h4>
        </div>
        <div className=" flex justify-center gap-3 font-semibold text-sm">
          <p>Location : Eranakulam, Kerala</p>
          <p>Reg. Date: 27/07/2023</p>
          <p>De-Act. Date: 30/07/2023</p>
        </div>
        <div>
          <button
            onClick={handleClickOpen}
            className="float-right py-2 px-3 text-sm bg-pink text-white rounded-xl"
          >
            Send Notification
          </button>
          <NotificationModal open={open} handleClose={handleClose} />
        </div>
      </div>

      <section className="mt-5">
        {/* uidai data */}
        <div className="bg-white flex flex-col gap-4 rounded-lg shadow-md p-4">
          <div>
            <h4>Reason for De-Activation</h4>
            <p>I am getting married</p>
          </div>
          <div>
            <h4>Comment</h4>
            <p>UIDAI is mandated to issue an easily verifiable 12 digit random number as Unique Identity - Aadhaar to all Residents of India.</p>
          </div>
          
        </div>

        <div className="mt-3 flex justify-end gap-3">
          <button className="loat-right py-2 px-3 w-44 text-sm bg-green-600 text-white rounded-xl">
            Re-Activate
          </button>
          <button className="loat-right py-2 px-3 w-44 text-sm bg-red-600 text-white rounded-xl">
            Remove Profile
          </button>
        </div>
      </section>
    </section>
  );
};

export default UserDetails;
