/* eslint-disable react/prop-types */

const IdProof = ({ images }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-5">
      <h4>ID Proof</h4>
      <div className="mt-2">
        <img
          src={images?.sideOne?.url}
          alt="id-img"
          className="hover:scale-150 h-44 w-auto transition-all cursor-zoom-in"
        />
        <img
          src={images?.sideTwo?.url}
          alt="Oops.."
          className="mt-1 hover:scale-150 transition-all cursor-zoom-in"
        />
      </div>
    </div>
  );
};

export default IdProof;
