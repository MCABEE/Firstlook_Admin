import { Pagination } from "@mui/material";
import {Dropdown} from "../../../components/dropDown";
import PhotoDetails from "./PhotoDetails";
import { useState } from "react";

const AllPhotos = () => {
  const dropdownStyle = "border border-gray rounded-xl py-2 px-5 my-2 w-40";
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <section>
        <PhotoDetails handleClose={handleClose} open={open} />
      {/* Total users and Filters */}
      <div className="flex gap-1 overflow-auto items-start">
        <div>
          <div className="p-2 rounded-xl text-center border text-gray-dark w-28">
            <p className="text-xs">All Photos</p>
            <h2>8232</h2>
          </div>
        </div>
        <div className="px-3">
          <h2 className="font-medium text-sm text-gray-dark">Apply Filter</h2>
          <form>
            <div className="flex flex-wrap items-center gap-2">
              <Dropdown style={dropdownStyle} placeHolder="State" />
              <Dropdown style={dropdownStyle} placeHolder="District" />
              <Dropdown style={dropdownStyle} placeHolder="Gender" />
              <Dropdown style={dropdownStyle} placeHolder="Year" />
              <Dropdown style={dropdownStyle} placeHolder="Month" />
              <div>
                <button className="border rounded-xl text-white bg-pink h-[40px] px-2 ">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Photo list */}
      <div className="bg-white mt-10 p-2 rounded-md max-w-5xl">
        <p className="mb-2">
          Filtered Result : <span className="text-lg font-bold">{323}</span>
        </p>
        <div className="flex gap-2 flex-wrap">
          <img
            src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/14444779/pexels-photo-14444779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16943662/pexels-photo-16943662/free-photo-of-people-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16907552/pexels-photo-16907552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/14444779/pexels-photo-14444779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16943662/pexels-photo-16943662/free-photo-of-people-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16907552/pexels-photo-16907552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/14444779/pexels-photo-14444779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16943662/pexels-photo-16943662/free-photo-of-people-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16907552/pexels-photo-16907552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/14444779/pexels-photo-14444779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16943662/pexels-photo-16943662/free-photo-of-people-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
          <img
            src="https://images.pexels.com/photos/16907552/pexels-photo-16907552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            onClick={()=> handleClickOpen()} className="h-40 w-32 object-cover"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </section>
  );
};

export default AllPhotos;
