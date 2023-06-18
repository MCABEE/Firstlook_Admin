import { object, string } from "yup";

export const languageSchema = object({
  state: string().required("Please select a state"),
  language: string().min(3, "Enter a valid language name"),
});
