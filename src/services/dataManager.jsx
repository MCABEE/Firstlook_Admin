import axios from "./axios";

const getToken = () => {
  return localStorage.getItem('token');
};

const getHeaders = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ============== PLACE ==============

// ADD NEW COUNTRY
export const addCountry = (data) =>
  axios.post("/api/admin/dataManager/place/country", data, getHeaders());

// GET ALL COUNTRIES
export const getCountries = () =>
  axios.get("/api/admin/dataManager/place/country", getHeaders());

// ADD NEW STATE
export const addState = (data) =>
  axios.post("/api/admin/dataManager/place/state", data, getHeaders());

// GET STATES OF A COUNTRY / ALL
export const getStates = (country) =>
  axios.get(`/api/admin/dataManager/place/state?country=${country}`, getHeaders());

// ADD NEW DISTRICT
export const addDistrict = (data) =>
  axios.post("/api/admin/dataManager/place/district", data, getHeaders());

// GET DISTRICTS OF A STATE / ALL
export const getDistricts = (stateId) =>
  axios.get(
    `/api/admin/dataManager/place/district?stateId=${stateId}`,
    getHeaders()
  );

// ADD NEW HOMETOWN
export const addHomeTown = (data) =>
  axios.post("/api/admin/dataManager/place/homeTown", data, getHeaders());

// ADD NEW CITY
export const addCity = (data) =>
  axios.post("/api/admin/dataManager/place/city", data, getHeaders());

// ADD NEW PINCODE
export const addPincode = (data) =>
  axios.post("/api/admin/dataManager/place/pincode", data, getHeaders());

// =============== BASIC =================
export const addMotherTounge = (data) =>
  axios.post("/api/admin/dataManager/basic/motherTounge", data, getHeaders());

export const getMotherTounges = (country) =>
  axios.get(
    `/api/admin/dataManager/basic/motherTounge?country=${country}`,
    getHeaders()
  );

export const deleteMotherTounge = (languageId, language) =>
  axios.delete(
    `/api/admin/dataManager/basic/motherTounge?languageId=${languageId}&language=${language}`,
    getHeaders()
  );

// ============== RELIGION ===============
export const addReligion = (data) =>
  axios.post("/api/admin/dataManager/religion", data, getHeaders());

export const getReligions = () =>
  axios.get("/api/admin/dataManager/religion", getHeaders());

export const addCaste = (data) =>
  axios.post("/api/admin/dataManager/religion/caste", data, getHeaders());

export const getCastes = (religion) =>
  axios.get(
    `/api/admin/dataManager/religion/caste?religion=${religion}`,
    getHeaders()
  );

export const deleteCaste = (casteName) =>
  axios.delete(
    `/api/admin/dataManager/religion/caste?caste=${casteName}`,
    getHeaders()
  );

// ============== INSTITUTION ================
export const addCollege = (data) =>
  axios.post("/api/admin/dataManager/institution/college", data, getHeaders());

export const addUniversity = (data) =>
  axios.post("/api/admin/dataManager/institution/university", data, getHeaders());

export const addInstitute = (data) =>
  axios.post("/api/admin/dataManager/institution/institute", data, getHeaders());

export const getInstitutions = (type, country) =>
  axios.get(
    `/api/admin/dataManager/institution/${type}?country=${country}`,
    getHeaders()
  );

export const deleteInstitution = (type, id) =>
  axios.delete(`/api/admin/dataManager/institution/${type}?id=${id}`, getHeaders());

// ============== ACADEMIC =================
export const addStream = (data) =>
  axios.post("/api/admin/dataManager/academic/stream", data, getHeaders());

export const getStreams = () =>
  axios.get("/api/admin/dataManager/academic/stream", getHeaders());

export const addCourse = (data) =>
  axios.post("/api/admin/dataManager/academic/course", data, getHeaders());

//============== OCCUPATION ================
export const addOccupationStream = (data) =>
  axios.post("/api/admin/dataManager/occupation/stream", data, getHeaders());

export const getOccupationStreams = () =>
  axios.get("/api/admin/dataManager/occupation/stream", getHeaders());

export const addDesignation = (data) =>
  axios.post("/api/admin/dataManager/occupation/designation", data, getHeaders());

// ============== EMPLOYER ================
export const addEmployer = (data) =>
  axios.post("/api/admin/datamanager/employer", data, getHeaders());

export const getEmployers = (country) =>
  axios.get(`/api/admin/datamanager/employer?country=${country}`, getHeaders());

export const deleteEmployer = (id) =>
  axios.delete(`/api/admin/datamanager/employer?id=${id}`, getHeaders());
