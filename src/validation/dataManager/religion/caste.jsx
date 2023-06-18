import { object, string } from "yup";

export const casteSchema = object({
  religion: string().required("Please select a religion"),
  caste: string().min(2, "Enter a valid caste name"),
});
