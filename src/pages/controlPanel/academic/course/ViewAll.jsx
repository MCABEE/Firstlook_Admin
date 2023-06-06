/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { getCourses } from "../../../../services/dataManager";

const ViewAll = ({ streams }) => {
  const [courses, setCourses] = useState([]);
  const [courseList, setCourseList] = useState([]);

  const fetchCourses = async () => {
    const { data } = await getCourses();
    setCourses(data.courses);
    setCourseList(data.courses);
  };

  const filterCousre = (stream) => {
    stream
      ? setCourseList(courses.filter((course) => course._id === stream))
      : setCourseList(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"stream"}
        options={streams}
        placeHolder={"Select stream"}
        setState={filterCousre}
      />

      <div className="mt-3 flex flex-col gap-3">
        {courseList.map((stream) => (
          <>
            <span
              key={stream._id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {stream._id}
            </span>
            {stream?.courses?.map((course) => (
              <div key={course?._id} className="flex justify-between ml-4">
                <div className="flex gap-2">
                  <input id="course" type="checkbox" />
                  <label htmlFor="course">{course?.name}</label>
                </div>
                <button>
                  <DeleteForeverOutlinedIcon />
                </button>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
