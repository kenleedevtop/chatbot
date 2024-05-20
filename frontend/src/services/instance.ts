import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || ''
    );
  }
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || ''
    )
);
