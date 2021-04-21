import axios from 'axios';

export const getHostEvents = (userId) => {
  return axios.get(`/api/events/hosted/${userId}`);
};

export const getAttendingEvents = (userId) => {
  return axios.get(`/api/events/attending/${userId}`);
};


