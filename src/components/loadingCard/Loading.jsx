const loadingCard = ({ times }) => {
  return [...Array(times)].map((e, i) => (
    <div key={i} className="shadow-md p-1">
      <div className="animate-pulse flex flex-col">
        <div className="bg-slate-700 h-28 w-24"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default loadingCard;
