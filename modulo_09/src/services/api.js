import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3333',
  // baseURL: 'https://www.breakingbadapi.com/api',
});

export default api;
