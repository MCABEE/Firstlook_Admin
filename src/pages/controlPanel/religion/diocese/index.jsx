import { useEffect, useState } from "react";
import { getCastesList } from "../../../../services/dataManager";
import Form from "./Form";
import ViewAll from "./ViewAll";

const Caste = () => {
  const [selected, setSelected] = useState("add");
  const [castes, setCastes] = useState([]);

  const listChristianCastes = async () => {
    const { data } = await getCastesList("Christian");
    setCastes(data.castes);
  };

  useEffect(() => {
    listChristianCastes();
  }, []);

  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";

  return (
    <section>
      <div className="grid place-content-center mt-8">
        <div className="flex gap-5 mb-10">
          <button
            onClick={() => setSelected("add")}
            className={selected === "add" ? selectedLink : nonSelectedLink}
          >
            Add
          </button>
          <button
            onClick={() => setSelected("viewAll")}
            className={selected === "viewAll" ? selectedLink : nonSelectedLink}
          >
            View all
          </button>
        </div>
        {selected === "add" && <Form castes={castes} />}

        {selected === "viewAll" && <ViewAll castes={castes} />}
      </div>
    </section>
  );
};

export default Caste;
