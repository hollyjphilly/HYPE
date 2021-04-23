import axios from "axios";

export const getOneEvent = (eventId) => {
  return axios.get(`/api/events/${eventId}`);
};

export const getAllEvents = () => {
  return axios.get("/api/events");
};

export const postEvent = (data) => {
  return axios.post("/api/events/", data);
};

export const deleteEvent = (eventId) => {
  return axios.delete(`/api/events/${eventId}`);
};

export const addUserToEvent = (eventId, data) => {
  return axios.put(`/api/events/${eventId}`, data);
};

export const removeUserFromEvent = (eventId, data) => {
  return axios.put(`/api/events/remove/${eventId}`, data);
};
