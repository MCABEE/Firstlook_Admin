import { object, string } from "yup";

export const employerSchema = object({
  country: string().required("Please select a country"),
  employer: string().min(3, "Enter a valid employer name"),
});
