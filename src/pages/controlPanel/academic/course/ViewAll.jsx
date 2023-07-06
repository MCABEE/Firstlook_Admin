/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { getCourses, deleteCourse } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ streams }) => {
  const [courses, setCourses] = useState([]);
  const [stream, setStream] = useState("");

  const fetchCourses = async (stream) => {
    const { data } = await getCourses(stream);
    setCourses(data.courses);
  };

  const removeCourse = async (id) => {
    await deleteCourse(id);
    toast.success("Deleted successfully");
    fetchCourses(stream);
  };

  useEffect(() => {
    fetchCourses(stream);
  }, [stream]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"stream"}
        options={streams}
        placeHolder={"Select stream"}
        setState={setStream}
      />

      {courses.map((stream) => (
        <div className="flex flex-col my-3" key={stream._id}>
          <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
            {stream._id}
          </span>
          {stream?.courses?.map((course) => (
            <div key={course?._id} className="flex justify-between ml-4">
              <div className="flex gap-2">
                <input id="course" type="checkbox" />
                <label htmlFor="course">{course?.name}</label>
              </div>
              <button
                className="text-slate-500"
                onClick={() => removeCourse(course?._id)}
              >
                <DeleteForeverOutlinedIcon />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewAll;
