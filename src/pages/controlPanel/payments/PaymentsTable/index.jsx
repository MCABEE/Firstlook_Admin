import { DataTable } from "../../../../components/dataTable";

const columns = [
  { field: "id", headerName: "No", width: 100 },
  { field: "transactionId", headerName: "Transaction ID", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "firstName", headerName: "User", flex: 1 },
  { field: "subscription", headerName: "Subscription Plan", flex: 1 },
  { field: "amount", headerName: "Amount", width: 130 },
];

const data = [
  {
    id: 1,
    transactionId: "40000321",
    date: "12/06/2023",
    firstName: "John",
    subscription: "Basic",
    amount: 999,
  },
  {
    id: 2,
    transactionId: "40000322",
    date: "12/06/2023",
    firstName: "Joy",
    subscription: "Basic",
    amount: 999,
  },
  {
    id: 3,
    transactionId: "40000324",
    date: "13/06/2023",
    firstName: "Arun",
    subscription: "Basic",
    amount: 999,
  },
  {
    id: 4,
    transactionId: "40000326",
    date: "13/06/2023",
    firstName: "Rose",
    subscription: "Premium",
    amount: 2499,
  },
];

const Payments = () => {
  return (
    <div>
      <h1>Payments</h1>
      <div className="mt-5 bg-white rounded p-2">
        <p className="mb-1">Result Count : <span className="font-bold">4</span></p>
        <DataTable columns={columns} rows={data} />
      </div>
    </div>
  );
};

export default Payments;
