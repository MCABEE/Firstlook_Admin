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
import { useEffect, useReducer, useState } from "react";
import {
  getCountries,
  getDistrictsList,
  getOccupationStreamsList,
  getStatesList,
} from "../../../../services/dataManager";
import { Checkbox, ListItemText } from "@mui/material";
import { updateAdminPost } from "../../../../services/dataManager";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setPostUpdate } from "../../../../redux/slices/adminPostSlice";
import { adminPostSchema } from "../../../../validation/dataManager/adminPost/post";

const reducer = (state, action) => {
  switch (action.type) {
    case "POST_TITLE":
      return { ...state, title: action.val };
    case "BUTTON_NAME":
      return { ...state, buttonName: action.val };
    case "LANDING_PAGE":
      return { ...state, landingPage: action.val };
    case "START_DATE":
      return { ...state, startDate: action.val };
    case "END_DATE":
      return { ...state, endDate: action.val };
    case "USER_TYPE":
      return {
        ...state,
        audience: { ...state.audience, userType: action.val },
      };
    case "USER_GENDER":
      return { ...state, audience: { ...state.audience, gender: action.val } };
    case "USER_AGE_FROM":
      return { ...state, audience: { ...state.audience, ageFrom: action.val } };
    case "USER_AGE_UPTO":
      return { ...state, audience: { ...state.audience, ageUpto: action.val } };
    case "USER_COUNTRY":
      return { ...state, audience: { ...state.audience, country: action.val } };
    case "USER_STATE":
      return {
        ...state,
        audience: { ...state.audience, state: action.val, districts: [] },
      };
    case "USER_DISTRICTS":
      return {
        ...state,
        audience: { ...state.audience, districts: action.val },
      };
    case "USER_OCCUPATION_STREAM":
      return {
        ...state,
        audience: { ...state.audience, occupationStream: action.val },
      };
    default:
      return state;
  }
};

const EditPost = ({ open, handleClose }) => {
  const { selectedPost, update } = useSelector(
    (state) => state.posts
  );
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [occupationStreams, setOccupationStreams] = useState([]);

  const dispatch = useDispatch();

  const initialState = {
    ...selectedPost,
    audience: {
      userType: selectedPost.audience?.userType ?? "",
      gender: selectedPost.audience?.gender ?? "",
      ageFrom: selectedPost.audience?.ageFrom ?? "",
      ageUpto: selectedPost.audience?.ageUpto ?? "",
      country: selectedPost.audience?.country ?? "",
      state: selectedPost.audience?.state ?? "",
      districts: selectedPost.audience?.districts ?? [],
      occupationStream: selectedPost.audience?.occupationStream ?? "",
    },
  };

  const [postDetails, postDetailsDispatch] = useReducer(reducer, initialState);

  const validateInputs = async () => {
    await adminPostSchema.validate({
      postTitle: postDetails.title,
      buttonName: postDetails.buttonName,
      landingPage: postDetails.landingPage,
      startDate: postDetails.startDate,
      endDate: postDetails.endDate,
      file: postDetails.image.url,
    });
  };

  const handleSaveChanges = async () => {
    try {
      await validateInputs();
      toast.promise(updateAdminPost(postDetails._id, postDetails), {
        loading: "Saving...",
        success: "Changes saved successfully",
        error: "Changes could not save!",
      });
      dispatch(setPostUpdate(!update));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSelect = (event) => {
    const {
      target: { value },
    } = event;
    postDetailsDispatch({
      type: "USER_DISTRICTS",
      val: typeof value === "string" ? value.split(",") : value,
    });
  };

  const fetchCountries = async () => {
    const { data } = await getCountries();
    setCountries(data.countries);
  };

  const fetchStates = async (country) => {
    const { data } = await getStatesList(country);
    setStates(data?.states);
  };

  const fetchDistricts = async (state) => {
    const { data } = await getDistrictsList(state);
    setDistricts(data?.districts);
  };

  const fetchStreams = async () => {
    const { data } = await getOccupationStreamsList("");
    setOccupationStreams(data.occupationStreams);
  };

  useEffect(() => {
    fetchStates(postDetails.audience?.country || "");
  }, [postDetails.audience?.country]);

  useEffect(() => {
    fetchDistricts(postDetails.audience?.state || "");
  }, [postDetails.audience?.state]);

  useEffect(() => {
    fetchCountries();
    fetchStreams();
  }, []);

  return (
    <Dialog fullWidth={true} maxWidth={"xs"} open={open} onClose={handleClose}>
      <Toaster position="top-center" />
      <DialogTitle style={{ display: "flex", justifyContent: "end" }}>
        <Button
          label={"X"}
          style={"border border-slate-200 px-2 rounded"}
          onClick={handleClose}
        />
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col items-center">
          <Box>
            <img
              src={postDetails?.image.url}
              className="h-auto w-52 object-cover rounded"
              alt="photo"
            />
          </Box>

          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Title</label>
            <Select
              value={postDetails.title}
              onChange={(e) =>
                postDetailsDispatch({ type: "POST_TITLE", val: e.target.value })
              }
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
          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Button Name</label>
            <Select
              value={postDetails.buttonName}
              onChange={(e) =>
                postDetailsDispatch({
                  type: "BUTTON_NAME",
                  val: e.target.value,
                })
              }
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>Select a name</MenuItem>
              {buttonNames.map((buttonName) => (
                <MenuItem key={buttonName.id} value={buttonName.name}>
                  {buttonName.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Landing Page</label>
            <Select
              value={postDetails.landingPage}
              onChange={(e) => {
                postDetailsDispatch({
                  type: "LANDING_PAGE",
                  val: e.target.value,
                });
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value={""}>Select a page</MenuItem>
              {landingPages.map((landingPage) => (
                <MenuItem key={landingPage.id} value={landingPage.name}>
                  {landingPage.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }}>
            <label className="text-sm  ml-1" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={postDetails.startDate.slice(0, 10)}
              onChange={(e) =>
                postDetailsDispatch({ type: "START_DATE", val: e.target.value })
              }
              className="border border-gray focus:outline-sky-700 rounded-xl px-4 py-2"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }}>
            <label className="text-sm ml-1" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={postDetails.endDate.slice(0, 10)}
              onChange={(e) =>
                postDetailsDispatch({ type: "END_DATE", val: e.target.value })
              }
              className="border border-gray focus:outline-sky-700 rounded-xl px-4 py-2"
            />
          </FormControl>

          <h4 className="mt-2">Customize Audience</h4>
          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Quick Selection</label>
            <Select
              value={postDetails.audience?.userType}
              onChange={(e) => {
                postDetailsDispatch({
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

          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Gender</label>
            <Select
              value={postDetails.audience?.gender}
              onChange={(e) => {
                postDetailsDispatch({
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

          <FormControl sx={{ m: 1, width: "85%" }}>
            <label className="text-sm ml-1">Age From</label>
            <input
              type="number"
              className="border border-gray focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
              value={postDetails.audience?.ageFrom}
              onChange={(e) => {
                postDetailsDispatch({
                  type: "USER_AGE_FROM",
                  val: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }}>
            <label className="text-sm ml-1">Age Upto</label>
            <input
              type="number"
              className="border border-gray  focus:outline-sky-700 rounded-xl px-4 py-2 placeholder-black placeholder:italic"
              placeholder="None"
              value={postDetails.audience?.ageUpto}
              onChange={(e) => {
                postDetailsDispatch({
                  type: "USER_AGE_UPTO",
                  val: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Country</label>
            <Select
              value={postDetails.audience?.country}
              onChange={(e) => {
                postDetailsDispatch({
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
              {countries?.map((country) => (
                <MenuItem key={country?._id} value={country?.name}>
                  {country?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">State</label>
            <Select
              value={postDetails.audience?.state}
              onChange={(e) => {
                postDetailsDispatch({
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
              {states?.map((state) => (
                <MenuItem key={state?._id} value={state?._id}>
                  {state?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Districts</label>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={postDetails.audience?.districts || []}
              onChange={handleSelect}
              renderValue={(selected) => selected.join(", ")}
              sx={{ borderRadius: "12px" }}
            >
              {districts?.map((district) => (
                <MenuItem key={district?._id} value={district?.name}>
                  <Checkbox
                    checked={
                      postDetails.audience?.districts
                        ? postDetails.audience.districts.indexOf(
                            district?.name
                          ) > -1
                        : false
                    }
                  />
                  <ListItemText primary={district?.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "85%" }} size="small">
            <label className="text-sm ml-1">Occupation Stream</label>
            <Select
              value={postDetails.audience?.occupationStream}
              onChange={(e) => {
                postDetailsDispatch({
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
              {occupationStreams?.map((stream) => (
                <MenuItem key={stream?._id} value={stream?._id}>
                  {stream?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            label={"Save Changes"}
            style={"bg-pink text-white py-2 px-4 mt-3 rounded-xl "}
            onClick={handleSaveChanges}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;
