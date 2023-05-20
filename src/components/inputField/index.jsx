/* eslint-disable react/prop-types */
const InputField = ({ type, id, placeholder, setValue }) => {
  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray rounded-md py-2 px-5 my-2 w-80"
        onChange={updateValue}
      />
    </div>
  );
};
export default InputField;
