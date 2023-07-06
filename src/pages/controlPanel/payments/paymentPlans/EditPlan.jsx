/* eslint-disable react/prop-types */
import { useState } from "react";
import { updatePaymentPlan } from "../../../../services/dataManager";
import { paymentPlanSchema } from "../../../../validation/dataManager/paymentPlan";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setPlanUpdate } from "../../../../redux/slices/paymentPlanSlice";

const EditPlan = ({ open, handleClose }) => {
  const { selectedPlan } = useSelector((state) => state.paymentPlans);
  const dispatch = useDispatch();

  const [actualAmount, setActualAmount] = useState(selectedPlan.actualAmount);
  const [offerAmount, setOfferAmount] = useState(selectedPlan.offerAmount);
  const [gst, setGst] = useState(selectedPlan.gst);
  const [processingFee, setProcessingFee] = useState(
    selectedPlan?.processingFee
  );
  const total =
    parseFloat(offerAmount || 0) +
    parseFloat(gst || 0) +
    parseFloat(processingFee || 0);

  const handleSave = async () => {
    const data = {
      planName: selectedPlan.planName,
      actualAmount,
      offerAmount,
      gst,
      processingFee,
      total,
    };
    try {
      await paymentPlanSchema.validate(data);
      await updatePaymentPlan(selectedPlan._id, data);
      toast.success("Updated Successfully");
      dispatch(setPlanUpdate());
      handleClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Dialog
        maxWidth={"xs"}
        fullWidth={true}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{selectedPlan?.planName}</DialogTitle>
        <DialogContent>
          <label className="text-sm m-1">Actual amount</label>
          <TextField
            fullWidth
            id="actualAmount"
            type="number"
            variant="outlined"
            size="small"
            value={actualAmount}
            onChange={(e) => setActualAmount(e.target.value)}
          />
          <label className="text-sm m-1">Offer amount</label>
          <TextField
            fullWidth
            id="offerAmount"
            type="number"
            variant="outlined"
            size="small"
            value={offerAmount}
            onChange={(e) => setOfferAmount(e.target.value)}
          />
          <label className="text-sm m-1">GST</label>
          <TextField
            fullWidth
            id="gst"
            type="number"
            variant="outlined"
            size="small"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
          <label className="text-sm m-1">Processing fee</label>
          <TextField
            fullWidth
            id="processingFee"
            type="number"
            variant="outlined"
            size="small"
            value={processingFee}
            onChange={(e) => setProcessingFee(e.target.value)}
          />
          <div className="text-right mt-2">
            <strong>Total: {total}</strong>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>SAVE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditPlan;
