import axios from "./axios";
import { getHeaders } from "./dataManager";

// ==========  ALL USERS ==========
export const getAllUsers = (page) =>
  axios.get(`/api/admin/users/allUsers/${page ?? 1}`, getHeaders());

// ====== GET USER DETAILS ========
export const getUserDetails = (id) =>
  axios.get(`/api/admin/users/${id}`, getHeaders());

// ======== NEW USERS ==========
export const getNewUsers = (page) =>
  axios.get(`/api/admin/users/newUsers/${page ?? 1}`, getHeaders());

// ======= USERS - ID NOT VERIFIED =======
export const getIdVerificationUsers = (page) =>
  axios.get(`/api/admin/users/idVerification/${page ?? 1}`, getHeaders());

// =====  GET AADHAR DETAILS =====
export const getAadharDetails = (userId) =>
  axios.get(`/api/admin/users/aadharDetails/${userId}`, getHeaders());

// ==== VERIFY AADHAR ======
export const verifyAadhar = (id) =>
  axios.patch(`/api/admin/users/aadharDetails/${id}`, {}, getHeaders());

export const rejectAadhar = (id) =>
  axios.post(`/api/admin/users/aadharDetails/${id}`, {}, getHeaders());
