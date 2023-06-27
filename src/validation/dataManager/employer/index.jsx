import { object, string } from "yup";

export const employerSchema = object({
  category: string().required("Please select a category"),
  employer: string().min(3, "Enter a valid employer name"),
});
