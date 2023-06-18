import { object, string } from "yup";

export const citySchema = object({
  state: string().required("Please select a state"),
  city: string().min(3, "Enter a valid city name"),
});
