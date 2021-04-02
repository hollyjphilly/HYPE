import axios from "axios";

export const getOneEvent = (eventId) => {
  return axios.get(`/api/events/${eventId}`);
};

export const getAllEvents = () => {
  return axios.get("/api/events");
};

// export const getUserEvents = (userId) => {
//   return axios.get(`/api/events/user/${userId}`);
// };

export const postEvent = (data) => {
  return axios.post("/api/events/", data);
};

export const addUserToEvent = (eventId, data) => {
  debugger
  return axios.put(`/api/events/${eventId}`, data);
};