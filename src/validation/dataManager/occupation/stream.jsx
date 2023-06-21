import { object, string } from "yup";

export const occupationStreamSchema = object({
  category: string().required("Please select a category"),
  stream: string().min(2, "Enter a valid stream name"),
});
