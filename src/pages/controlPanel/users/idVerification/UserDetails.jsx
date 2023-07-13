import { useEffect, useState } from "react";
import Avatar from "../../../../assets/user_avatar.png";
import { NotificationModal } from "../../../../components/modal/NotificationModal";
import DataTable from "./DataTable";
import IdProof from "./IdProof";
import { useParams } from "react-router-dom";
import {
  getAadharDetails,
  rejectAadhar,
  verifyAadhar,
} from "../../../../services/userServices";
import dateFormat from "dateformat";
import IdDetails from "./IdDetails";
import { toast } from "react-hot-toast";

const IdVerificationUserDetails = () => {
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const [isAuto, setIsAuto] = useState(true);
  const [aadharDetails, setAadharDetails] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleApproved = async (userId) => {
    await verifyAadhar(userId);
    toast.success("Aadhar Approved Successfully.");
  };

  const handleRejected = async (userId) => {
    await rejectAadhar(userId);
    toast.success("Aadhar Rejectd.");
  };

  const fetchUserDetails = async (userId) => {
    const { data } = await getAadharDetails(userId);
    setAadharDetails(data.aadharDetails);
  };

  useEffect(() => {
    setIsAuto(!!aadharDetails?.aadharNumber);
  }, [aadharDetails]);

  useEffect(() => {
    fetchUserDetails(userId);
  }, [userId]);

  return (
    <section className="grid place-content-center">
      {/* Basic information */}
      <div className="bg-white shadow-sm p-5 rounded-md flex flex-col gap-3 justify-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={aadharDetails.userId?.profileImage?.url || Avatar}
            alt="avatar"
            className="rounded-full w-20 h-20 object-cover"
          />
          <h4>{`${aadharDetails.userId?.firstName} ${aadharDetails.userId?.lastName}`}</h4>
        </div>
        <div className=" flex justify-center gap-3 font-semibold text-sm">
          <p>
            Location :{" "}
            {`${aadharDetails.userId?.native?.state}, ${aadharDetails.userId?.native?.country}`}
          </p>
          <p>Reg. Date: {dateFormat(aadharDetails.createdAt, "longDate")}</p>
          <p>
            ID Uploaded:{" "}
            {dateFormat(aadharDetails.userId?.createdAt, "longDate")}
          </p>
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
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          {/* user data */}
          <DataTable heading={"User Data"} data={aadharDetails.userId} />

          {/* uidai data */}
          {isAuto && <IdDetails heading={"UIDAI Data"} data={aadharDetails} />}

          {/* ID - Manual verification */}
          {!isAuto && <IdProof images={aadharDetails?.images} />}
        </div>

        <div className="mt-5 flex gap-5 justify-center">
          <button
            onClick={() => handleApproved(userId)}
            className="loat-right py-2 px-3 w-44 text-sm bg-green-600 text-white rounded-xl"
          >
            Approved
          </button>
          <button
            onClick={() => handleRejected(userId)}
            className="loat-right py-2 px-3 w-44 text-sm bg-red-600 text-white rounded-xl"
          >
            Rejected
          </button>
        </div>
      </section>
    </section>
  );
};

export default IdVerificationUserDetails;
