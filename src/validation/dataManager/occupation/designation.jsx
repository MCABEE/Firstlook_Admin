import { object, string } from "yup";

export const designationSchema = object({
  streamId: string().required('Please select a stream'),
  designation: string().min(2, 'Enter a valid designation name')
});
