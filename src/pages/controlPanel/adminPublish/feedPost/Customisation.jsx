/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../../../../components/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import { Checkbox, ListItemText } from "@mui/material";

const districts = [
  "Alappuzha",
  "Ernakulam",
  "Kollama",
  "Kottayam",
  "Malappuram",
];

export default function Customisation({ handleClose, open }) {
  const [age, setAge] = useState("");
  const [districtName, setDistrictName] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setDistrictName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Dialog fullWidth={true} maxWidth={"xs"} open={open}>
      <DialogTitle style={{ display: "flex", justifyContent: "end" }}>
        <Button
          label={"X"}
          style={"border border-slate-200 px-2 rounded"}
          onClick={handleClose}
        />
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col items-center">
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Quick Selection</label>
            <Select
              value={age}
              onChange={handleChange}
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

          <Divider variant="middle" />

          <h4>More Customize </h4>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Select Gender</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Age From/To</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={25}>Twenty Five</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Country</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Canada'}>Canada</MenuItem>
              <MenuItem value={'India'}>India</MenuItem>
              <MenuItem value={'UAE'}>UAE</MenuItem>
              <MenuItem value={'USA'}>USA</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">State</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={30}>Karnadaka</MenuItem>
              <MenuItem value={10}>Kerala</MenuItem>
              <MenuItem value={20}>Tamilnadu</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <label className="text-sm ml-1">District</label>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={districtName}
              onChange={handleSelect}
              renderValue={(selected) => selected.join(", ")}
              sx={{ borderRadius: "12px" }}
            >
              {districts.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={districtName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Occupation Stream</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Business</MenuItem>
              <MenuItem value={20}>Engineering</MenuItem>
              <MenuItem value={10}>IT</MenuItem>
              <MenuItem value={30}>Medical</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Designation</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Doctor</MenuItem>
              <MenuItem value={20}>Nurse</MenuItem>
              <MenuItem value={30}>Software Engineer</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Status</label>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          label={"Save changes"}
          style={"border py-1 px-2 mr-2 rounded bg-pink text-white"}
          onClick={handleClose}
        />
      </DialogActions>
    </Dialog>
  );
}
