import Adhar from '../../../../assets/adhar-img.png'

const IdProof = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-5">
      <h4>ID Proof</h4>
      <div className='mt-2'>
        <img src={Adhar} alt="id-img" className='hover:scale-150 transition-all cursor-zoom-in' />
        <img src={Adhar} alt="id-img" className='mt-1 hover:scale-150 transition-all cursor-zoom-in'/>
      </div>
    </div>
  );
};

export default IdProof;
