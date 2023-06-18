import { useState } from "react";
import InputField from "../../../../components/inputField";
import Button from "../../../../components/Button";
import { addCountry } from "../../../../services/dataManager";
import { toast } from "react-hot-toast";
import { countrySchema } from "../../../../validation/dataManager/places/country";

const Form = () => {
  const [country, setCountry] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await countrySchema
      .validate({ country })
      .then(async () => {
        try {
          await addCountry({ country });
          toast.success("Country added!");
        } catch (error) {
          toast.error("Coudn't add!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
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
  );
};

export default Form;
