/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Button from "../../../components/Button";
import dateFormat from "dateformat";
import avatar from "../../../assets/user_avatar.png";
import { useState } from "react";
import { verifyPost, removePost } from "../../../services/postRoutes";
import { toast } from "react-hot-toast";

export default function PhotoDetails({ handleClose, open, post }) {
  const [reason, setReason] = useState("");
  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const handleAccept = async (id) => {
    await verifyPost(id);
    handleClose();
    toast.success("Post verified successfully.");
  };

  const handleRemove = async (id) => {
    if (reason === "") return toast.error("Please select a reason.");
    await removePost(id);
    setReason("");
    handleClose();
    toast.success("Post removed successfully.");
  };

  return (
    <Dialog fullWidth={false} maxWidth={"md"} open={open} onClose={handleClose}>
      <DialogTitle style={{ display: "flex", justifyContent: "end" }}>
        <Button
          label={"X"}
          style={"border border-slate-200 px-2 rounded"}
          onClick={handleClose}
        />
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 mx-auto">
          <Box>
            <img
              src={post?.content?.url}
              className="w-auto h-full object-cover rounded"
              alt="photo"
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src={post?.userId?.profileImage?.url || avatar}
                alt="profile"
                className="h-14 w-14 bg-slate-300 object-cover rounded-full cursor-pointer"
              />
              <Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Typography>{post?.userId?.displayName}</Typography>
                  <VerifiedIcon fontSize="10px" className="text-pink" />
                </Box>
                <Typography sx={{ fontSize: 12 }}>
                  {`${post?.userId?.personalInfo.religion}, ${post?.userId?.personalInfo.caste}, ${post?.userId?.native.district}, ${post?.userId?.native.country}`}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  Photo added on{" "}
                  {dateFormat(post?.createdAt, "mmmm d yyyy, h:MM TT")}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button
                style={"w-80 py-2 bg-green-600 rounded text-white"}
                label={"Accept"}
                onClick={() => handleAccept(post?._id)}
              />
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="We found that it's not you!"
                    control={<Radio />}
                    label="We found that it's not you!"
                  />
                  <FormControlLabel
                    value="Photo has low quality"
                    control={<Radio />}
                    label="Photo has low quality"
                  />
                  <FormControlLabel
                    value={"Photo contain text/watermark, do not approve"}
                    control={<Radio />}
                    label="Photo contain text/watermark, do not approve"
                  />
                  <FormControlLabel
                    value={"Photo against our community standards"}
                    control={<Radio />}
                    label="Photo against our community standards"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                label={"Remove"}
                style={"bg-slate-700 text-white w-80 py-2 mt-2 rounded"}
                onClick={() => handleRemove(post?._id)}
              />
            </Box>
          </Box>
        </div>
      </DialogContent>
    </Dialog>
  );
}
