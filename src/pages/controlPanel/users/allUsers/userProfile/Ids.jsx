import DataTable from "../../idVerification/DataTable";
import IdProof from "../../idVerification/IdProof";

const Ids = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10 my-5">
      <DataTable heading={"User Entry"} />
      <IdProof />
    </div>
  );
};

export default Ids;
