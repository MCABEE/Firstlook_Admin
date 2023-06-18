import { object, string } from "yup";

export const courseSchema = object({
  stream: string().required("Please select a stream"),
  course: string().min(2, "Enter a valid course name"),
});
