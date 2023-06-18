import { object, string } from "yup";

export const academicStreamSchema = object({
  stream: string().min(3, "Please Enter a valid stream"),
});
