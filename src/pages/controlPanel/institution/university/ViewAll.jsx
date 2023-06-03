/* eslint-disable react/prop-types */
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const ViewAll = ({countries}) => {

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
      />

      <div className="mt-3 flex flex-col gap-3">
        <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
          Universities
        </span>
        {["universities"]?.map((university) => (
          <div key={university?.id} className="flex justify-between ml-4">
            <div className="flex gap-2">
              <input id="university" type="checkbox" />
              <label htmlFor="university">
                {university?.name}, {university?.place}
              </label>
            </div>
            <button>
              <DeleteForeverOutlinedIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
