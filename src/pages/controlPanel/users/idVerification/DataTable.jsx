/* eslint-disable react/prop-types */
import dateFormat from "dateformat";

const DataTable = ({ heading, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-5">
      <h4>{heading}</h4>
      <table className="mt-3">
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium text-slate-900">
            First Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            {data?.firstName || data?.fullName}
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Second Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            {data?.lastName || "-----"}
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Date Of Birth
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            {dateFormat(data?.dob, "longDate")}
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Father Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            {data?.family?.fatherName || data?.fatherName}
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Address
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            <p>{data?.familyAddress?.houseName || data?.houseName}</p>
            <p>{data?.familyAddress?.pincode || ` Pincode ${data?.pincode}`} </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DataTable;
