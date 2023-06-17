/* eslint-disable react/prop-types */
const Dropdown = ({ name, options, placeHolder, style, setState }) => {
    return (
      <div>
        <select
          name={name}
          className={style || "border border-gray rounded-xl py-2 px-5 mb-4 w-80"}
          onChange={(e) => setState(e.target.value)}
        >
          <option value={''}>{placeHolder}</option>
          {options?.map((option, index) => (
            <option key={index} value={option?.name}>
              {option?.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default Dropdown;