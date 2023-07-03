import { object, string } from "yup";

export const dioceseSchema = object({
  caste: string().required("Please select a caste"),
  diocese: string().min(3, "Enter a valid diocese name"),
});
