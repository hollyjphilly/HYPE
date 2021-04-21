import axios from 'axios';

export const getHostEvents = (userId) => {
  return axios.get(`/api/events/hosted/${userId}`);
};

export const getAttendingEvents = (userId) => {
  return axios.get(`/api/events/attending/${userId}`);
};

export const updateAvatar = (userData) => {
  return axios.patch('/api/users/avatar', userData);
};

// export const fetchUser = (userId) => {
//   
//   return axios.get(`/api/users/${userId}`);
// };
