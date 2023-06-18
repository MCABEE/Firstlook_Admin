import { object, string } from "yup";

export const designationSchema = object({
  stream: string().required('Please select a stream'),
  designation: string().min(3, 'Enter a valid designation name')
});
