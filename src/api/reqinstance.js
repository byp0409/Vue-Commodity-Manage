import axios from 'axios';

const reqinstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

reqinstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

reqinstance.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default reqinstance;
