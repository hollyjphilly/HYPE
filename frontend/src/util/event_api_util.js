import axios from 'axios';

export const getOneEvent = (eventId) => {
  return axios.get(`/api/events/${eventId}`)
};

export const getAllEvents = () => {
  return axios.get('/api/events')
};

export const getUserEvents = userId => {
  return axios.get(`/api/events/user/${userId}`)
};

export const createEvents = data => {
  return axios.post('/api/events/', data)
}