import { useState } from "react";
import Button from "../../../../components/Button";
import InputField from "../../../../components/inputField";
import { addCountry } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";

const Country = () => {
  const [selected, setSelected] = useState("add");
  const [country, setCountry] = useState("");

  const selectedLink =
    "w-20 bg-pink text-center p-2 rounded-xl border border-slate-200 text-white";
  const nonSelectedLink =
    "w-20 bg-white text-center p-2 rounded-xl border border-slate-200";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCountry({country});
      toast.success("Country added!");
    } catch (error) {
      toast.error(error.response.data.maessage);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Add Country</h2>
          <InputField
            id={"country"}
            type={"text"}
            placeholder={"Country Name"}
            setState={setCountry}
          />
          <Button
            label={"Save"}
            style={"w-36 rounded-xl bg-pink mt-4 text-white py-2 float-right"}
          />
        </form>
      </div>
    </section>
  );
};

export default Country;
