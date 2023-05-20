/* eslint-disable react/prop-types */

const Button = ({ style, label, onClick }) => {
  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
