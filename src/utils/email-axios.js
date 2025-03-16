import axios from 'axios';

const emailApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

emailApi.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_SECRET_KEY}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

emailApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Email API Error:', error);
    return Promise.reject(error);
  }
);

export default emailApi;
