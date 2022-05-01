import axios from 'axios';

const mockinstance = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});

mockinstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
mockinstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default mockinstance;
