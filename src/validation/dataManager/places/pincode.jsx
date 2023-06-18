import { object, string } from "yup";

export const pincodeSchema = object({
  district: string().required("Please select a district"),
  pincode: string().min(6).max(6).required("Enter a valid pincode"),
  postOffice: string().min(3, "Enter a valid post office name"),
});
