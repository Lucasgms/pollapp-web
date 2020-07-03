import axios from 'axios';

let config = {};
const token = localStorage.getItem('@Pollapp:token');

if (token) {
  config = {
    headers: { Authorization: `Bearer ${token}` },
  };
}

const api = axios.create({
  baseURL: 'http://localhost:3333',
  ...config,
});

export default api;
