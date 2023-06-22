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
import { Checkbox, ListItemText } from "@mui/material";
import { useReducer } from "react";

const districts = [
  "Alappuzha",
  "Ernakulam",
  "Kollam",
  "Kottayam",
  "Malappuram",
];

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_TYPE":
      return { ...state, userType: action.val };
    case "USER_GENDER":
      return { ...state, gender: action.val };
    case "USER_AGE_FROM":
      return { ...state, ageFrom: action.val };
    case "USER_AGE_UPTO":
      return { ...state, ageUpto: action.val };
    case "USER_COUNTRY":
      return { ...state, country: action.val };
    case "USER_STATE":
      return { ...state, state: action.val };
    case "USER_DISTRICTS":
      return { ...state, districts: action.val };
    case "USER_OCCUPATION_STREAM":
      return { ...state, occupationStream: action.val };
    case "USER_DESIGNATION":
      return { ...state, designation: action.val };
    default:
      return state;
  }
};

const initialState = {
  userType: "",
  gender: "",
  ageFrom: "",
  ageUpto: "",
  country: "",
  state: "",
  districts: [],
  occupationStream: "",
  designation: "",
};

export default function Customisation({ handleClose, open, setAudience }) {
  const [customisationState, customisationDispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    customisationDispatch({
      type: "USER_DISTRICTS",
      val: typeof value === "string" ? value.split(",") : value,
    });
  };

  const saveChanges = () => {
    setAudience(customisationState)
    handleClose();
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
              value={customisationState.userType}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_TYPE",
                  val: e.target.value,
                });
              }}
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
            <label className="text-sm ml-1">Gender</label>
            <Select
              value={customisationState.gender}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_GENDER",
                  val: e.target.value,
                });
              }}
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

          <FormControl sx={{ m: 1, minWidth: "80%" }}>
            <label className="text-sm ml-1">Age From</label>
            <input
              type="number"
              className="border border-gray focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
              value={customisationState.ageFrom}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_AGE_FROM",
                  val: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }}>
            <label className="text-sm ml-1">Age Upto</label>
            <input
              type="number"
              className="border border-gray  focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
              value={customisationState.ageUpto}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_AGE_UPTO",
                  val: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Country</label>
            <Select
              value={customisationState.country}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_COUNTRY",
                  val: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Canada"}>Canada</MenuItem>
              <MenuItem value={"India"}>India</MenuItem>
              <MenuItem value={"UAE"}>UAE</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">State</label>
            <Select
              value={customisationState.state}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_STATE",
                  val: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Karnadaka"}>Karnadaka</MenuItem>
              <MenuItem value={"Kerala"}>Kerala</MenuItem>
              <MenuItem value={"Tamilnadu"}>Tamilnadu</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Districts</label>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={customisationState.districts}
              onChange={handleSelect}
              renderValue={(selected) => selected.join(", ")}
              sx={{ borderRadius: "12px" }}
            >
              {districts.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    checked={customisationState.districts.indexOf(name) > -1}
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Occupation Stream</label>
            <Select
              value={customisationState.occupationStream}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_OCCUPATION_STREAM",
                  val: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
              <MenuItem value={"Engineering"}>Engineering</MenuItem>
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"Medical"}>Medical</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
            <label className="text-sm ml-1">Designation</label>
            <Select
              value={customisationState.designation}
              onChange={(e) => {
                customisationDispatch({
                  type: "USER_DESIGNATION",
                  val: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Doctor"}>Doctor</MenuItem>
              <MenuItem value={"Nurse"}>Nurse</MenuItem>
              <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
            </Select>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          label={"Save changes"}
          style={"border py-1 px-2 mr-2 rounded bg-pink text-white"}
          onClick={saveChanges}
        />
      </DialogActions>
    </Dialog>
  );
}
