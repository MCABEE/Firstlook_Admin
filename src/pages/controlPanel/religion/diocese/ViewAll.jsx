/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { deleteDiocese, getDiocese } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ castes }) => {
  const [dioceses, setDioceses] = useState([]);
  const [caste, setCaste] = useState("");

  const listDiocese = async (caste) => {
    const { data } = await getDiocese(caste);
    setDioceses(data.dioceses);
  };

  const removeDiocese = async (id) => {
    await deleteDiocese(id);
    toast.success("Deleted Successfully!");
    listDiocese(caste);
  };

  useEffect(() => {
    listDiocese(caste);
  }, [caste]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"caste"}
        options={castes}
        placeHolder={"Select Caste"}
        setState={setCaste}
      />

      {dioceses?.map((caste) => (
        <div key={caste?._id} className="mt-3 flex flex-col gap-3">
          <span className="py-2 pl-4 bg-slate-300 font-medium rounded-xl">
            {caste._id}
          </span>
          {caste?.dioceses?.map((diocese) => (
            <div
              key={diocese?.name}
              className="flex justify-between items-center ml-4"
            >
              <div className="flex gap-2">
                <input id={diocese?.name} type="checkbox" />
                <label htmlFor={diocese?.name}>{diocese?.name}</label>
              </div>
              <button
                onClick={() => removeDiocese(diocese?._id)}
                className="text-slate-500"
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
