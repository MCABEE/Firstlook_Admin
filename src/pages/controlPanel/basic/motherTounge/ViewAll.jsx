/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Dropdown } from "../../../../components/dropDown";
import {
  getMotherTounges,
  deleteMotherTounge,
} from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const ViewAll = ({ countries }) => {
  const [motherTounges, setMotherTounges] = useState([]);
  const [country, setCountry] = useState("");

  const listLanguages = async (country) => {
    const { data } = await getMotherTounges(country);
    setMotherTounges(data.languages);
  };

  const deleteLanguage = async (stateId, language) => {
    const { status } = await deleteMotherTounge(stateId, language);
    if (status === 200) toast.success("Language deleted");
    listLanguages(country);
  };

  useEffect(() => {
    listLanguages(country);
  }, [country]);

  return (
    <div>
      <h2 className="mb-4">View all</h2>
      <Dropdown
        name={"country"}
        options={countries}
        placeHolder={"Select Country"}
        setState={setCountry}
      />

      <div className="mt-3 flex flex-col gap-3">
        {motherTounges?.map((country) => (
          <>
            {country?.states?.map((state) => (
              <>
                <span
                  key={state?.stateId}
                  className="py-2 pl-4 bg-slate-300 font-medium rounded-xl"
                >
                  {`${state?.state} - ${country?._id}`}
                </span>
                {state?.languages?.map((language, index) => (
                  <div
                    key={language + index}
                    className="flex justify-between ml-4"
                  >
                    <div className="flex gap-2">
                      <input id="language" type="checkbox" />
                      <label htmlFor="language">{language}</label>
                    </div>
                    <button
                      className="text-slate-500"
                      onClick={() => deleteLanguage(state?.stateId, language)}
                    >
                      <DeleteForeverOutlinedIcon />
                    </button>
                  </div>
                ))}
              </>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
