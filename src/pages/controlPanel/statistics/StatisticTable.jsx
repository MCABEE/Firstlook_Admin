import { Link } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const statistics = [
  {
    id: 1,
    category: "New Users",
    count: "213",
    link: "/controlPanel/newUsers",
  },
  {
    id: 2,
    category: "Incomplete Profiles",
    count: "113",
    link: "/controlPanel/incompleteProfiles",
  },
  {
    id: 3,
    category: "All Users",
    count: "64213",
    link: "/controlPanel/allUsers",
  },
  {
    id: 4,
    category: "Verified Users",
    count: "62130",
    link: "/controlPanel/IdVerification",
  },
  {
    id: 5,
    category: "New Photos",
    count: "6213",
    link: "/controlPanel/photoUpdates",
  },
  {
    id: 6,
    category: "All Photos",
    count: "45213",
    link: "/controlPanel/photoUpdates",
  },
  {
    id: 7,
    category: "New Videos",
    count: "2013",
    link: "/controlPanel/videoUpdates",
  },
  {
    id: 8,
    category: "All Videos",
    count: "2213",
    link: "/controlPanel/videoUpdates",
  },
  {
    id: 9,
    category: "Profile Updates",
    count: "121",
    link: "/controlPanel/profileUpdates",
  },
  {
    id: 10,
    category: "Paid Users",
    count: "62213",
    link: "/controlPanel/payments",
  },
  {
    id: 11,
    category: "De-Activated Users",
    count: "1235",
    link: "/controlPanel/deActivations",
  },
  {
    id: 12,
    category: "Non Active Users",
    count: "3213",
    link: "/controlPanel/deActivations",
  },
  {
    id: 13,
    category: "New Feedbacks",
    count: "132",
    link: "/controlPanel/feedbacks",
  },
  {
    id: 14,
    category: "Reports",
    count: "213",
    link: "/controlPanel/profileReports",
  },
  {
    id: 15,
    category: "Married",
    count: "5213",
    link: "/controlPanel/profileUpdates",
  },
];

const StatisticsTable = () => {
  return (
    <div>
      <table className="mt-3 bg-white border border-slate-300 rounded-md xl:w-1/2 sm:w-full">
        <thead>
          <tr>
            <th className="px-6 text-start py-4">Category</th>
            <th className="px-6 text-start py-4">Count</th>
            <th className="px-6 text-start py-4"> Details</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((item) => (
            <tr
              key={item.id}
              className="transition border-t border-slate-300 duration-300 ease-in-out hover:bg-slate-200"
            >
              <th className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                {item.category}
              </th>
              <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                {item.count}
              </td>
              <td className="text-sm text-slate-900 font-light px-6 py-4 whitespace-nowrap">
                <Link className="" to={item.link}>
                  <InfoOutlinedIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
