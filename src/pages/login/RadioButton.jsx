/* eslint-disable react/prop-types */
const RadioButton = ({ value, id, label }) => {
  const radioBtnStyle =
    "w-40 text-center my-5 cursor-pointer rounded-md border border-gray bg-white py-2 px-4 font-medium focus:outline-none peer-checked:border-transparent peer-checked:bg-pink peer-checked:text-white transition-all duration-500 ease-in-out";

  return (
    <>
      <input
        className="peer hidden"
        type="radio"
        name="loginType"
        value={value}
        id={id}
      />
      <label className={radioBtnStyle} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default RadioButton;
