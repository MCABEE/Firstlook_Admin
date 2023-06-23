import { object, string } from "yup";

export const adminPostSchema = object({
  postTitle: string().required("Please select a title"),
  buttonName: string().required("Please select a button name"),
  landingPage: string().required("Please select a landing page"),
  startDate: string().required("Please add a strarting date"),
  endDate: string().required("Please add an end date"),
  file: string().required("Please select a photo"),
});
