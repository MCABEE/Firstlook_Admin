/* eslint-disable react/prop-types */
const Dropdown = ({ name, options, placeHolder, style }) => {
  return (
    <div>
      <select
        name={name}
        className={ style || "border border-gray rounded-xl py-2 px-5 my-2 w-80"}
      >
        <option value={null}>{placeHolder}</option>
        {options?.map((option) => (
          <option key={option?.id} value={option?.name}>
            {option?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
