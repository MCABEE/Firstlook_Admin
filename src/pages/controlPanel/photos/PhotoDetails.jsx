/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Button from "../../../components/Button";

export default function PhotoDetails({handleClose, open}) {
  

  return (
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "end" }}>
          <Button
            label={"X"}
            style={"border border-slate-200 px-2 rounded"}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              gap: 8,
            }}
          >
            <Box>
              <img
                src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-auto w-52 object-cover rounded"
                alt="photo"
              />
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <img
                  src="https://images.pexels.com/photos/16578958/pexels-photo-16578958/free-photo-of-woman-portrait-near-louvre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profile"
                  className="h-14 w-14 object-cover rounded-full cursor-pointer"
                />
                <Box>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Typography>Shalini iyyer</Typography>
                    <VerifiedIcon fontSize="10px" className="text-pink" />
                  </Box>
                  <Typography sx={{ fontSize: 12 }}>
                    Hindu, Nair, 27 yrs, Mumbai
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    palakkad, kerala
                  </Typography>
                </Box>
                {/* <Typography fontSize={12}>
                    Photo added on June 19 2023
                </Typography> */}
              </Box>
              <Box sx={{ mt: 4 }}>
                <Button
                  style={"w-40 py-1 bg-green-600 rounded text-white"}
                  label={"Accept"}
                />
                <Button
                  style={"w-40 ml-2 py-1 bg-red-600 rounded text-white"}
                  label={"Decline"}
                />
              </Box>
              <FormGroup sx={{ mt: 4 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="We found that it's not you!"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photo has low quality"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photo contain text/watermark, do not approve"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photo against our community standards"
                />
              </FormGroup>
              <Button label={'Remove'} style={'bg-slate-700 text-white w-40 py-2 mt-2 rounded'} />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
  );
}
