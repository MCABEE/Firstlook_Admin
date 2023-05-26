import { useState } from "react";
import Avatar from "../../../../assets/user_avatar.png";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import DataTable from "./DataTable";
import IdProof from "./IdProof";

const IdVerificationUserDetails = () => {
  const [open, setOpen] = useState(false);
  const [isAuto, setIsAuto] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="grid place-content-center">
      {/* Basic information */}
      <div className="bg-white shadow-sm p-5 rounded-md flex flex-col gap-3 justify-center">
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
          <p>ID Uploaded: 30/07/2023</p>
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
        <div className="flex justify-between">
          {/* ID info */}
          <h3 className="text-center">
            {isAuto ? "Adhar Auto-Verification" : "Adhar Manual Verification"}
          </h3>
          <button
            onClick={() => setIsAuto(!isAuto)}
            className="float-right border rounded-md p-2"
          >
            switch mode
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          {/* user data --- make it dynamic */}
          <DataTable heading={"User Data"} />

          {/* uidai data --- make it dynamic */}
          {isAuto && <DataTable heading={"UIDAI Data"} />}

          {/* ID - Manual verification */}
          {!isAuto && <IdProof />}
        </div>

        <div className="mt-5 flex gap-5 justify-center">
          <button className="loat-right py-2 px-3 w-44 text-sm bg-green-600 text-white rounded-xl">
            Approved
          </button>
          <button className="loat-right py-2 px-3 w-44 text-sm bg-red-600 text-white rounded-xl">
            Rejected
          </button>
        </div>
      </section>
    </section>
  );
};

export default IdVerificationUserDetails;
