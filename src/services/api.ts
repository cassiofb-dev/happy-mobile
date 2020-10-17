import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-back-end.herokuapp.com',
});

export default api;
