import axios from "./axios";

const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const getHeaders = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const uploadHeaders = () => {
  const token = getToken();
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
};

// ============== PLACE ==============

// >>>>>> COUNTRY
export const addCountry = (data) =>
  axios.post("/api/admin/dataManager/place/country", data, getHeaders());

export const getCountries = () =>
  axios.get("/api/admin/dataManager/place/country", getHeaders());

export const deleteCountry = (id) =>
  axios.delete(`/api/admin/dataManager/place/country?id=${id}`, getHeaders());

//>>>>>> STATE
export const addState = (data) =>
  axios.post("/api/admin/dataManager/place/state", data, getHeaders());

export const getStates = (country) =>
  axios.get(
    `/api/admin/dataManager/place/state?country=${country}`,
    getHeaders()
  );

export const getStatesList = (country) =>
  axios.get(
    `/api/admin/dataManager/place/state/list?country=${country}`,
    getHeaders()
  );

export const deleteState = (id) =>
  axios.delete(`/api/admin/dataManager/place/state?id=${id}`, getHeaders());

//>>>>>> DISTRICT
export const addDistrict = (data) =>
  axios.post("/api/admin/dataManager/place/district", data, getHeaders());

export const getDistricts = (stateId) =>
  axios.get(
    `/api/admin/dataManager/place/district?stateId=${stateId}`,
    getHeaders()
  );

export const getDistrictsList = (stateId) =>
  axios.get(
    `/api/admin/dataManager/place/district/list?stateId=${stateId}`,
    getHeaders()
  );

export const deleteDistrict = (id) =>
  axios.delete(`/api/admin/dataManager/place/district?id=${id}`, getHeaders());

//>>>>>> HOMETOWN
export const addHomeTown = (data) =>
  axios.post("/api/admin/dataManager/place/homeTown", data, getHeaders());

export const getHomeTowns = () =>
  axios.get(`/api/admin/dataManager/place/homeTown`, getHeaders());

export const deleteHomeTown = (id) =>
  axios.delete(`/api/admin/dataManager/place/homeTown?id=${id}`, getHeaders());

//>>>>>> CITY
export const addCity = (data) =>
  axios.post("/api/admin/dataManager/place/city", data, getHeaders());

export const getCities = () =>
  axios.get("/api/admin/dataManager/place/city", getHeaders());

export const deleteCity = (id) =>
  axios.delete(`/api/admin/dataManager/place/city?id=${id}`, getHeaders());

//>>>>>> PINCODE
export const addPincode = (data) =>
  axios.post("/api/admin/dataManager/place/pincode", data, getHeaders());

export const getPincodes = () =>
  axios.get(`/api/admin/dataManager/place/pincode`, getHeaders());

export const deletePincode = (id) =>
  axios.delete(`/api/admin/dataManager/place/pincode?id=${id}`, getHeaders());

// =============== BASIC =================
export const addMotherTounge = (data) =>
  axios.post("/api/admin/dataManager/basic/motherTounge", data, getHeaders());

export const getMotherTounges = (country) =>
  axios.get(
    `/api/admin/dataManager/basic/motherTounge?country=${country}`,
    getHeaders()
  );

export const deleteMotherTounge = (stateId, language) =>
  axios.delete(
    `/api/admin/dataManager/basic/motherTounge?stateId=${stateId}&language=${language}`,
    getHeaders()
  );

// ============== RELIGION ===============
export const addReligion = (data) =>
  axios.post("/api/admin/dataManager/religion", data, getHeaders());

export const getReligions = () =>
  axios.get("/api/admin/dataManager/religion", getHeaders());

export const deleteReligion = (id) =>
  axios.delete(`/api/admin/dataManager/religion?id=${id}`, getHeaders());

export const addCaste = (data) =>
  axios.post("/api/admin/dataManager/religion/caste", data, getHeaders());

export const getCastes = (religion) =>
  axios.get(
    `/api/admin/dataManager/religion/caste?religion=${religion}`,
    getHeaders()
  );

export const getCastesList = (religion) =>
  axios.get(
    `/api/admin/dataManager/religion/caste/list?religion=${religion}`,
    getHeaders()
  );

export const deleteCaste = (id) =>
  axios.delete(`/api/admin/dataManager/religion/caste?id=${id}`, getHeaders());

export const addDiocese = (data) =>
  axios.post("/api/admin/dataManager/religion/diocese", data, getHeaders());

export const getDiocese = (caste) =>
  axios.get(
    `/api/admin/dataManager/religion/diocese?caste=${caste}`,
    getHeaders()
  );

export const deleteDiocese = (id) =>
  axios.delete(
    `/api/admin/dataManager/religion/diocese?id=${id}`,
    getHeaders()
  );

// ============== INSTITUTION ================
export const addCollege = (data) =>
  axios.post("/api/admin/dataManager/institution/college", data, getHeaders());

export const addUniversity = (data) =>
  axios.post(
    "/api/admin/dataManager/institution/university",
    data,
    getHeaders()
  );

export const addInstitute = (data) =>
  axios.post(
    "/api/admin/dataManager/institution/institute",
    data,
    getHeaders()
  );

export const getInstitutions = (type, country) =>
  axios.get(
    `/api/admin/dataManager/institution/${type}?country=${country}`,
    getHeaders()
  );

export const deleteInstitution = (type, id) =>
  axios.delete(
    `/api/admin/dataManager/institution/${type}?id=${id}`,
    getHeaders()
  );

// ============== ACADEMIC =================
export const addStream = (data) =>
  axios.post("/api/admin/dataManager/academic/stream", data, getHeaders());

export const getStreams = () =>
  axios.get("/api/admin/dataManager/academic/stream", getHeaders());

export const deleteStream = (id) =>
  axios.delete(`/api/admin/dataManager/academic/stream?id=${id}`, getHeaders());

export const addCourse = (data) =>
  axios.post("/api/admin/dataManager/academic/course", data, getHeaders());

export const getCourses = (stream) =>
  axios.get(
    `/api/admin/dataManager/academic/course?stream=${stream}`,
    getHeaders()
  );

export const deleteCourse = (id) =>
  axios.delete(`/api/admin/dataManager/academic/course?id=${id}`, getHeaders());

//============== OCCUPATION ================
export const addOccupationStream = (data) =>
  axios.post("/api/admin/dataManager/occupation/stream", data, getHeaders());

export const getOccupationStreamsList = (category) =>
  axios.get(
    `/api/admin/dataManager/occupation/stream/list?category=${category}`,
    getHeaders()
  );

export const getOccupationStreams = (category) =>
  axios.get(
    `/api/admin/dataManager/occupation/stream?category=${category}`,
    getHeaders()
  );

export const deleteOccpationStream = (id) =>
  axios.delete(
    `/api/admin/dataManager/occupation/stream?id=${id}`,
    getHeaders()
  );

export const addDesignation = (data) =>
  axios.post(
    "/api/admin/dataManager/occupation/designation",
    data,
    getHeaders()
  );

export const getDesignations = (category) =>
  axios.get(
    `/api/admin/dataManager/occupation/designation?category=${category}`,
    getHeaders()
  );

export const deleteDesignation = (id) =>
  axios.delete(
    `/api/admin/dataManager/occupation/designation?id=${id}`,
    getHeaders()
  );

// ============== EMPLOYER ================
export const addEmployer = (data) =>
  axios.post("/api/admin/dataManager/employer", data, getHeaders());

export const getEmployers = (category) =>
  axios.get(
    `/api/admin/dataManager/employer?category=${category}`,
    getHeaders()
  );

export const deleteEmployer = (id) =>
  axios.delete(`/api/admin/dataManager/employer?id=${id}`, getHeaders());

// ================ ADMIN PUBLISH ===============
export const adminPost = (data) =>
  axios.post("/api/admin/dataManager/adminPost", data, uploadHeaders());

export const getAdminPots = () =>
  axios.get("/api/admin/dataManager/adminPost", getHeaders());

export const deleteAdminPost = (id) =>
  axios.delete(`/api/admin/dataManager/adminPost?postId=${id}`, getHeaders());

export const updateAdminPost = (id, data) =>
  axios.patch(
    `/api/admin/dataManager/adminPost?postId=${id}`,
    data,
    getHeaders()
  );

// =============== PAYMENT =======================
export const addPaymentPlan = (data) =>
  axios.post("/api/admin/dataManager/payment", data, getHeaders());

export const getPaymentPlans = () =>
  axios.get("/api/admin/dataManager/payment", getHeaders());

export const updatePaymentPlan = (id, data) =>
  axios.patch(`/api/admin/dataManager/payment?id=${id}`, data, getHeaders());

export const deletePaymentPlan = (id) =>
  axios.delete(`/api/admin/dataManager/payment?id=${id}`, getHeaders());
