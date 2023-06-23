import { useState } from "react";
import { Dropdown } from "../../../../components/dropDown";
import InputField from "../../../../components/inputField";
import Customisation from "./Customisation";
import { adminPost } from "../../../../services/dataManager";
import {
  postTypes,
  buttonNames,
  landingPages,
} from "../../../../lib/constants";
import { adminPostSchema } from "../../../../validation/dataManager/adminPost/post";
import { toast } from "react-hot-toast";

const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [landingPage, setLandingPage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [file, setFile] = useState(null);

  // customisation modal
  const [open, setOpen] = useState(false);
  const [audience, setAudience] = useState(null);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = async () => {
    await adminPostSchema.validate({
      postTitle,
      buttonName,
      landingPage,
      startDate,
      endDate,
      file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await validateInputs()
      .then(async () => {
        const formData = new FormData();
        try {
          toast.loading("Post Uploading...");
          formData.append("image", file);
          formData.append("title", postTitle);
          formData.append("buttonName", buttonName);
          formData.append("landingPage", landingPage);
          formData.append("startDate", startDate);
          formData.append("endDate", endDate);
          formData.append("audience", JSON.stringify(audience));
          await adminPost(formData);
          toast.dismiss();
          toast.success("Post uploaded successfully");
        } catch (error) {
          toast.dismiss();
          toast.error("Post upload failed!");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      {open && <Customisation
        open={open}
        handleClose={handleClose}
        setAudience={setAudience}
      />}
      <h2 className="mb-4">Add Feed Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="title">
            Firstlook added
          </label>
          <Dropdown
            id="title"
            placeHolder={"Select Post title"}
            name={"title"}
            options={postTypes}
            setState={setPostTitle}
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
            options={buttonNames}
            setState={setButtonName}
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
            options={landingPages}
            setState={setLandingPage}
          />
        </div>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select Start Date
          </label>
          <InputField type={"Date"} id={"date"} setState={setStartDate} />
        </div>
        <div>
          <label className="ml-1 text-slate-500 text-sm" htmlFor="type">
            Select End Date
          </label>
          <InputField type={"Date"} id={"date"} setState={setEndDate} />
        </div>
        <div>
          <label htmlFor="photo">
            <div
              className={`w-80 rounded-xl mb-4 outline-dotted bg-white ${
                file ? "text-rose-300" : "text-pink"
              } p-2 text-center cursor-pointer`}
            >
              Select a Photo
            </div>
          </label>
          <input
            hidden
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
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
          type="submit"
          className="w-80 rounded-xl mb-4 bg-pink text-white p-2 text-center cursor-pointer"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
