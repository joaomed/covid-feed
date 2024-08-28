import axios from 'axios'
import { responseInterceptor } from './ResponseInterceptor';
import { errorInterceptor } from './ErrorInterceptor';

const Api = axios.create({
  baseURL: "https://covid-json-server.onrender.com/" || 'http://localhost:3333'
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
)

export { Api }