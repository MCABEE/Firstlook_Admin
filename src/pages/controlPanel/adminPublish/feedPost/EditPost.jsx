/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../../../../components/Button";
import {
  postTypes,
  buttonNames,
  landingPages,
} from "../../../../lib/constants";
import { FormControl, MenuItem, Select } from "@mui/material";

const EditPost = ({ open, handleClose, selectedPost }) => {
  return (
    <Dialog fullWidth={true} maxWidth={"xs"} open={open} onClose={handleClose}>
      <DialogTitle style={{ display: "flex", justifyContent: "end" }}>
        <Button
          label={"X"}
          style={"border border-slate-200 px-2 rounded"}
          onClick={handleClose}
        />
      </DialogTitle>
      {console.log("-----", selectedPost)}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box>
          <img
            src={selectedPost.imageUrl}
            className="h-auto w-52 object-cover rounded"
            alt="photo"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Title</label>
            <Select
              value={selectedPost.title}
              onChange={(e) => e.target.value}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>Select a title</MenuItem>
              {postTypes.map((title) => (
                <MenuItem key={title.id} value={title.name}>
                  {title.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Button Name</label>
            <Select
              value={selectedPost.buttonName}
              onChange={(e) => e.target.value}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>Select a title</MenuItem>
              {buttonNames.map((title) => (
                <MenuItem key={title.id} value={title.name}>
                  {title.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Landing Page</label>
            <Select
              value={selectedPost.landingPage}
              onChange={(e) => e.target.value}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>Select a title</MenuItem>
              {landingPages.map((title) => (
                <MenuItem key={title.id} value={title.name}>
                  {title.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <label className="text-sm  ml-1 mt-2" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={selectedPost.startDate.slice(0, 10)}
              className="border border-gray rounded-xl py-2 px-5 mb-4 w-80"
            />
          </FormControl>
          <FormControl>
            <label className="text-sm ml-1" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={selectedPost.endDate.slice(0, 10)}
              className="border border-gray rounded-xl py-2 px-5 mb-4 w-80"
            />
          </FormControl>
          <h4>Customize Audience?</h4>

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Quick Selection</label>
            <Select
              value={selectedPost.audience?.userType}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_TYPE",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>All Verified Users</MenuItem>
              <MenuItem value={"male"}>All Mens</MenuItem>
              <MenuItem value={"female"}>All Womens</MenuItem>
              <MenuItem value={"nonPaid"}>All Non-paid Users</MenuItem>
              <MenuItem value={"paid"}>All Paid Users</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Gender</label>
            <Select
              value={selectedPost.audience?.gender}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_GENDER",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <label className="text-sm ml-1">Age From</label>
            <input
              type="number"
              className="border border-gray focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
                value={selectedPost.audience?.ageFrom}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_AGE_FROM",
              //       val: e.target.value,
              //     });
              //   }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <label className="text-sm ml-1">Age Upto</label>
            <input
              type="number"
              className="border border-gray  focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
                value={selectedPost.audience?.ageUpto}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_AGE_UPTO",
              //       val: e.target.value,
              //     });
              //   }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Country</label>
            <Select
                value={selectedPost.audience?.country}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_COUNTRY",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {countries?.map((country) => (
                <MenuItem key={country?._id} value={country?.name}>
                  {country?.name}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">State</label>
            <Select
              //   value={customisationState.state}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_STATE",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {states?.map((state) => (
                <MenuItem key={state?._id} value={state?._id}>
                  {state?.name}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Districts</label>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              //   value={customisationState.districts}
              //   onChange={handleSelect}
              renderValue={(selected) => selected.join(", ")}
              sx={{ borderRadius: "12px" }}
            >
              {/* {districts?.map((district) => (
                <MenuItem key={district?._id} value={district?.name}>
                  <Checkbox
                    checked={
                      customisationState.districts.indexOf(district?.name) > -1
                    }
                  />
                  <ListItemText primary={district?.name} />
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Occupation Stream</label>
            <Select
              //   value={customisationState.occupationStream}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_OCCUPATION_STREAM",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {occupationStreams?.map((stream) => (
                <MenuItem key={stream?._id} value={stream?._id}>
                  {stream?.name}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <label className="text-sm ml-1">Designation</label>
            <Select
              //   value={customisationState.designation}
              //   onChange={(e) => {
              //     customisationDispatch({
              //       type: "USER_DESIGNATION",
              //       val: e.target.value,
              //     });
              //   }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* {designations?.map((designation) => (
                <MenuItem key={designation?._id} value={designation?.name}>
                  {designation?.name}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </Box>
        <Button
          label={"Save Changes"}
          style={"bg-pink text-white py-2 rounded px-4 "}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;
