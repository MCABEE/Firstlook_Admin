import { useEffect, useState } from "react";
import Form from "./Form";
import ViewAll from "./ViewAll";
import { getCountries } from "../../../../services/dataManager";

const Employers = () => {
  const [selected, setSelected] = useState("add");

  const [countries, setCountries] = useState([]);
  const listCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  useEffect(() => {
    listCountries();
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
        {selected === "add" && <Form countries={countries} />}

        {/* VIEW ALL */}
        {selected === "viewAll" && <ViewAll countries={countries} />}
      </div>
    </section>
  );
};

export default Employers;
