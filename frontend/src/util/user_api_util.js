import axios from "axios";

export const getUserEventAttending = (userId) => {
  return axios.get(`/api/events/attending/${userId}`);
};

export const getUserEventHosting = (userId) => {
  return axios.get(`/api/events/hosted/${userId}`);
};

