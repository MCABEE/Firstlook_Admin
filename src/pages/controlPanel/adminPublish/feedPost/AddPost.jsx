import { useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Customisation from "./Customisation";

const options = [
  { id: 1, name: "Request" },
  { id: 2, name: "Greetings" },
  { id: 3, name: "Offer" },
];

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <div>
      <Customisation open={open} handleClose={handleClose} />
      <h2 className="mb-4">Add Feed Post</h2>
      <form>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Firstlook added
          </label>
          <Dropdown
            id="type"
            placeHolder={"Select Post type"}
            name={"type"}
            options={options}
          />
        </div>

        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select Button Name
          </label>
          <Dropdown
            id="type"
            placeHolder={"Select One"}
            name={"type"}
            options={options}
          />
        </div>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select Landing Page
          </label>
          <Dropdown
            id="type"
            placeHolder={"Select One"}
            name={"type"}
            options={options}
          />
        </div>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select Start Date
          </label>
          <InputField type={"Date"} id={"date"} />
        </div>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select End Date
          </label>
          <InputField type={"Date"} id={"date"} />
        </div>
        <div>
          <label htmlFor="photo">
            <div className="w-80 rounded-xl mb-4 outline-dotted bg-white p-2 text-center text-pink cursor-pointer">
              Select a Photo
            </div>
          </label>
          <input hidden id="photo" type="file" />
        </div>
        <div>
          <button
            className="w-80 rounded-xl mb-4 bg-slate-300 p-2 text-center cursor-pointer"
            onClick={handleOpen}
          >
            Customize Audience Group
          </button>
        </div>

        <button
          className="w-80 rounded-xl mb-4 bg-pink text-white p-2 text-center cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
