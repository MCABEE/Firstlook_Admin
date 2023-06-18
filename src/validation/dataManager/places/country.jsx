import { object, string } from "yup";

export const countrySchema = object({
  country: string().min(3, "Enter a valid country name"),
});
