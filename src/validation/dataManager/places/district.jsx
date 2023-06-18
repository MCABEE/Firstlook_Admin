import { object, string } from "yup";

export const districtSchema = object({
  state: string().required("Please select a state"),
  district: string().min(3, "Enter a valid district name"),
});
