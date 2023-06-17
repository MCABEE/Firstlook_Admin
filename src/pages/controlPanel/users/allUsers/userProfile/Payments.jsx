const Payments = () => {
  return (
    <section>
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col md:flex-row gap-2 justify-between">
        <div className="flex md:flex-col gap-2">
          <p className="text-sm font-bold">Date</p>
          <span className="text-sm">12/05/2023</span>
        </div>
        <div className="flex md:flex-col gap-2">
          <p className="text-sm font-bold">Transaction Id</p>
          <span className="text-sm">#4000122023</span>
        </div>
        <div className="flex md:flex-col gap-2">
          <p className="text-sm font-bold">Subscription Plan</p>
          <span className="text-sm">Basic</span>
        </div>
        <div className="flex md:flex-col gap-2">
          <p className="text-sm font-bold">Amount</p>
          <span className="text-sm">₹ 999</span>
        </div>
        <div className="flex md:flex-col gap-2">
          <p className="text-sm font-bold">Validity</p>
          <span className="text-sm">12/05/2024</span>
        </div>
      </div>
    </section>
  );
};

export default Payments;
