import { object, string } from "yup";

export const stateSchema = object({
  country: string().required("Please select a country"),
  state: string().min(3, "Enter a valid state name"),
});
