import { useState } from "react";
import Avatar from "../../../../assets/user_avatar.png";
import { NotificationModal } from "../../../../components/modal/NotificationModal";

const IdVerificationUserDetails = () => {
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
        {/* ID info */}
        <h3 className="text-center">Adhar Auto-Verification</h3>
        <div className="flex justify-center flex-wrap gap-10">
          {/* user data */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-5">
            <h4>User Data</h4>
            <table className="mt-3">
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  First Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Tom
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Second Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Joseph
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Date Of Birth
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  12/04/1997
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Father Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Mark
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Address
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  <p>Plamattom H </p>
                  <p>Edamattom P.O </p>
                  <p>kallur, Eranakulam </p>
                </td>
              </tr>
            </table>
          </div>

          {/* uidai data */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-5">
            <h4>UIDAI Data</h4>
            <table className="mt-3">
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  First Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Tom
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Second Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Joseph
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Date Of Birth
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  12/04/1997
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Father Name
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  Mark
                </td>
              </tr>
              <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
                <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
                  Address
                </th>
                <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                  <p>Plamattom H </p>
                  <p>Edamattom P.O </p>
                  <p>kallur, Eranakulam </p>
                </td>
              </tr>
            </table>
          </div>
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
