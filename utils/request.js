import axios from 'axios';

const { baseURL } = process.env;

const service = axios.create({
  baseURL,
  timeout: 10000,
  proxyHeaders: false,
  credentials: false,
});

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  let token = '';
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem('__JWT');
  }

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Accept'] = 'application/json';
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error.response.data);
  }
);

export default async function api(url, data, method = 'post', params = {}) {
  const headers = {};
  let token = '';
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem('__JWT');
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  headers['Access-Control-Allow-Origin'] = '*';
  headers['Accept'] = 'application/json';

  const result = await service.request({
    method,
    url,
    data,
    params,
    headers
  });
  return result;
}
