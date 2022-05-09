import axiosLib from 'axios';

export const axiosInstance = axiosLib.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=utf-8',
  },
});
