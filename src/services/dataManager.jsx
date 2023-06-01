import axios from "./axios";
const token = localStorage.getItem("token");
const headers = { headers: { Authorization: `Bearer ${token}` } };

// ============== PLACE ==============

// ADD NEW COUNTRY
export const addCountry = (data) =>
  axios.post("/api/admin/dataManager/place/country", data, headers);

// GET ALL COUNTRIES
export const getCountries = () =>
  axios.get("/api/admin/dataManager/place/country", headers);

// ADD NEW STATE
export const addState = (data) =>
  axios.post("/api/admin/dataManager/place/state", data, headers);

// GET STATES OF A COUNTRY / ALL
export const getStates = (country) =>
  axios.get(`/api/admin/dataManager/place/state?country=${country}`, headers);

// ADD NEW DISTRICT
export const addDistrict = (data) =>
  axios.post("/api/admin/dataManager/place/district", data, headers);

// GET DISTRICTS OF A STATE / ALL
export const getDistricts = (stateId) =>
  axios.get(
    `/api/admin/dataManager/place/district?stateId=${stateId}`,
    headers
  );

// ADD NEW HOMETOWN
export const addHomeTown = (data) =>
  axios.post("/api/admin/dataManager/place/homeTown", data, headers);

// ADD NEW CITY
export const addCity = (data) =>
  axios.post("/api/admin/dataManager/place/city", data, headers);

// ADD NEW PINCODE
export const addPincode = (data) =>
  axios.post("/api/admin/dataManager/place/pincode", data, headers);

// =============== BASIC =================

export const addMotherTounge = (data) =>
  axios.post("/api/admin/dataManager/basic/motherTounge", data, headers);

// ============== RELIGION ===============
export const addReligion = (data) =>
  axios.post("/api/admin/dataManager/religion", data, headers);

export const getReligions = () =>
  axios.get("/api/admin/dataManager/religion", headers);

export const addCaste = (data) =>
  axios.post("/api/admin/dataManager/religion/caste", data, headers);
