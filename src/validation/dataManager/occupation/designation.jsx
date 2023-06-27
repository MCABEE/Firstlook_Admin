import { object, string } from "yup";

export const designationSchema = object({
  category: string().required("Please select a category"),
  designation: string().min(2, "Enter a valid designation name"),
});
