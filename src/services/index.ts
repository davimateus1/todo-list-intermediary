import axios from 'axios';

const getUsername = JSON.parse(localStorage.getItem('@user') || '{}');

export const api = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_API_URL,
  headers: {
    username: getUsername.username,
  },
});
