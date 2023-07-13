import axios from "./axios";
import { getHeaders } from "./dataManager";

// ===== Posts =======
export const verifyPost = (id) =>
  axios.patch(`/api/admin/posts/images?postId=${id}`, {}, getHeaders());

export const getImagePosts = () =>
  axios.get("/api/admin/posts/images", getHeaders());

export const removePost = (id) =>
  axios.delete(`/api/admin/posts/images?postId=${id}`, getHeaders());

export const getVideoPosts = () =>
  axios.get("/api/admin/posts/videos", getHeaders());

export const removeVideo = (id) =>
  axios.delete(`/api/admin/posts/videos?postId=${id}`, getHeaders());
