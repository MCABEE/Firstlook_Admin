import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown } from "../../../../components/dropDown";

const ViewAll = () => {
  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={["streams"]}
        placeHolder={"Select Country"}
      />

      <div className="mt-3 flex flex-col gap-3">
        {["employers"].map((employer) => (
          <>
            <span
              key={employer.id}
              className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
            >
              {employer.stream}
            </span>
            {employer?.employers?.map((name, index) => (
              <div key={index} className="flex justify-between ml-4">
                <div className="flex gap-2">
                  <input id="course" type="checkbox" />
                  <label htmlFor="course">{name}</label>
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
