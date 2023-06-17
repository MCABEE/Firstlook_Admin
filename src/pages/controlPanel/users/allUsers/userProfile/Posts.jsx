const Posts = () => {
  return (
    <div className="mt-5">
      <p className="mb-2">
        Total Posts : <span className="text-lg font-bold">{3}</span>
      </p>
      <div className="flex gap-x-3 gap-y-2 flex-wrap">
        <img
          src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="photo"
          className="h-40 w-32 object-cover"
        />
        <img
          src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="photo"
          className="h-40 w-32 object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14444779/pexels-photo-14444779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="photo"
          className="h-40 w-32 object-cover"
        />
      </div>
    </div>
  );
};

export default Posts;
