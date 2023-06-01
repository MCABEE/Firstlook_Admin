/* eslint-disable react/prop-types */
const InputField = ({ type, id, placeholder, setState }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray rounded-xl py-2 px-5 my-2 w-80"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};
export default InputField;
