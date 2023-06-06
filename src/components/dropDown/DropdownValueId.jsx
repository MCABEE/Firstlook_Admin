/* eslint-disable react/prop-types */
const DropdownValueId = ({ name, options, placeHolder, style, setState }) => {
    return (
      <div>
        <select
          name={name}
          className={style || "border border-gray rounded-xl py-2 px-5 my-2 w-80"}
          onChange={(e) => setState(e.target.value)}
        >
          <option value={''}>{placeHolder}</option>
          {options?.map((option) => (
            <option key={option?._id} value={option?._id}>
              {option?.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropdownValueId;
  