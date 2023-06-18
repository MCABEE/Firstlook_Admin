import { object, string } from "yup";

export const institutionSchema = object({
  country: string().required("Please select a country"),
  institution: string().min(3, "Enter a valid institution name"),
});
