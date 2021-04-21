import axios from 'axios';

export const fetchAvatar = () => {
  return axios.get(`/api/users/current`);
};

export const updateAvatar = (userData) => {
  return axios.patch('/api/users/avatar', userData);
};