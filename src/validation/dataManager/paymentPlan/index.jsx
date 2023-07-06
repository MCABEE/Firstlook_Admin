import { string, number, object } from "yup";

export const paymentPlanSchema = object({
  planName: string().required("Please select a plan name"),
  actualAmount: number().moreThan(0).min(2, "Enter a valid amount").max(10000),
  offerAmount: number().moreThan(0).min(2, "Enter a valid amount").max(50000),
  gst: number().moreThan(0).required("Enter a valid GST amount").max(1000),
  processingFee: number()
    .moreThan(-1, "Processing fee should be greater than or equal to 0")
    .max(100),
  total: number().moreThan(0).required("Please Fill all the Fields"),
});
