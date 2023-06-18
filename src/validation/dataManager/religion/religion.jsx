import { object, string } from "yup";

export const religionSchema = object({
  religion: string().min(3, "Enter a valid religion name"),
});
