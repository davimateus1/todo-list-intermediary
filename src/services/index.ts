import axios from 'axios';

const getUsername = JSON.parse(localStorage.getItem('@user') || '{}');

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    username: getUsername.username,
  },
});
