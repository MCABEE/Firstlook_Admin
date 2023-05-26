// eslint-disable-next-line react/prop-types
const DataTable = ({heading}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-5">
      <h4>{heading}</h4>
      <table className="mt-3">
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium text-slate-900">
            First Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            Tom
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Second Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            Joseph
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Date Of Birth
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            12/04/1997
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Father Name
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            Mark
          </td>
        </tr>
        <tr className="bg-white transition duration-300 ease-in-out hover:bg-slate-100">
          <th className="px-6 py-4 text-start whitespace-nowrap text-sm font-medium text-slate-900">
            Address
          </th>
          <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
            <p>Plamattom H </p>
            <p>Edamattom P.O </p>
            <p>kallur, Eranakulam </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DataTable;
