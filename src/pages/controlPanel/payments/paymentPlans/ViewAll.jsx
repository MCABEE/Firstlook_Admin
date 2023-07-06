import {
  deletePaymentPlan,
  getPaymentPlans,
} from "../../../../services/dataManager";
import { useEffect, useState } from "react";
import EditPlan from "./EditPlan";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  setPaymentPlans,
  setPlanUpdate,
  setSelectedPlan,
} from "../../../../redux/slices/paymentPlanSlice";

const ViewAll = () => {
  const [open, setOpen] = useState(false);
  const { paymentPlans, update } = useSelector((state) => state.paymentPlans);
  const dispatch = useDispatch();

  const fetchPaymentPlans = async () => {
    const { data } = await getPaymentPlans();
    dispatch(setPaymentPlans(data.paymentPlans));
  };

  const handleEditClick = (plan) => {
    dispatch(setSelectedPlan(plan));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async (id) => {
    if (window.confirm("Delete the item?")) {
      await deletePaymentPlan(id);
      toast.success("Deleted successfully");
      dispatch(setPlanUpdate());
    }
  };

  useEffect(() => {
    fetchPaymentPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return (
    <div>
      <table className="mt-3 bg-white border border-slate-300 rounded-md">
        <thead>
          <tr>
            <th className="px-6 font-medium text-start py-4">Plan</th>
            <th className="px-6 font-medium text-start py-4">Actual Amt.</th>
            <th className="px-6 font-medium text-start py-4"> Offer Amt.</th>
            <th className="px-6 font-medium text-start py-4"> GST</th>
            <th className="px-6 font-medium text-start py-4">Processing Fee</th>
            <th className="px-6 font-medium text-start py-4"> Total</th>
            <th className="px-6 font-medium text-start py-4"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {paymentPlans?.map((item) => (
            <tr
              key={item?._id}
              className="transition border-t border-slate-300 duration-300 ease-in-out hover:bg-slate-200"
            >
              <td className="px-6 text-start py-4 whitespace-nowrap text-sm text-slate-900">
                {item?.planName}
              </td>
              <td className="text-sm text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                {item?.actualAmount}
              </td>
              <td className="text-sm text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                {item?.offerAmount}
              </td>
              <td className="text-sm text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                {item?.gst}
              </td>
              <td className="text-sm text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                {item?.processingFee}
              </td>
              <td className="text-sm text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                {item?.total}
              </td>
              <td className="text-sm flex gap-2 text-slate-900 text-center px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEditClick(item)}
                  className="bg-slate-500 rounded-md px-2 py-1 text-white hover:scale-95"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="bg-red-600 rounded-md px-2 py-1 text-white hover:scale-95"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && <EditPlan open={open} handleClose={handleClose} />}
    </div>
  );
};

export default ViewAll;
