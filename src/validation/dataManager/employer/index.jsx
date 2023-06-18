import { object, string } from "yup";

export const employerSchema = object({
  country: string().required("Please select a country"),
  stream: string().required("Please select a stream"),
  employer: string().min(3, "Enter a valid employer name"),
});
