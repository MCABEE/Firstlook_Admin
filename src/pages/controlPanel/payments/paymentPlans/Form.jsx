import { useState } from "react";
import Button from "../../../../components/Button";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import { addPaymentPlan } from "../../../../services/dataManager";
import { paymentPlanSchema } from "../../../../validation/dataManager/paymentPlan";
import { toast } from "react-hot-toast";

const paymentPlans = [
  { id: 1, name: "Standard" },
  { id: 2, name: "Premium" },
  { id: 3, name: "Top Up" },
];

const Form = () => {
  const [planName, setPlanName] = useState("");
  const [actualAmount, setActualAmount] = useState(0);
  const [offerAmount, setOfferAmount] = useState(0);
  const [gst, setGst] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const total =
    parseFloat(offerAmount || 0) +
    parseFloat(gst || 0) +
    parseFloat(processingFee || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      planName,
      actualAmount,
      offerAmount,
      gst,
      processingFee,
      total,
    };
    try {
      await paymentPlanSchema.validate(data);
      await addPaymentPlan(data);
      toast.success("Payment plan added");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add Payment Plans</h2>
      <div>
        <label className="ml-1 text-sm text-slate-500">Payment Plan</label>
        <Dropdown
          name={"planName"}
          options={paymentPlans}
          placeHolder={"Select a plan"}
          setState={setPlanName}
        />
        <label className="ml-1 text-sm text-slate-500">Actual amount</label>
        <InputField
          id={"actualAmount"}
          placeholder={"₹"}
          type={"number"}
          setState={setActualAmount}
        />
        <label className="ml-1 text-sm text-slate-500">Offer amount</label>
        <InputField
          id={"offerAmount"}
          placeholder={"₹"}
          type={"number"}
          setState={setOfferAmount}
        />
        <label className="ml-1 text-sm text-slate-500">GST</label>
        <InputField
          id={"gst"}
          placeholder={"₹"}
          type={"number"}
          setState={setGst}
        />
        <label className="ml-1 text-sm text-slate-500">Processing fee</label>
        <InputField
          id={"processingFee"}
          placeholder={"₹"}
          type={"number"}
          setState={setProcessingFee}
        />
      </div>
      <div className="text-right">
        <strong>Total: {total}</strong>
      </div>
      <div>
        <Button
          label={"Save"}
          style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
        />
      </div>
    </form>
  );
};

export default Form;
