import { object, string } from "yup";

export const occupationStreamSchema = object({
  stream: string().min(2, "Enter a valid stream name"),
});
