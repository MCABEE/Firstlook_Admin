import { object, string } from "yup";

export const homeTownSchema = object({
  district: string().required("Please select a district"),
  homeTown: string().min(3, "Enter a valid town name"),
});
