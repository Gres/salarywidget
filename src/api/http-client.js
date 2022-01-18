import axios from 'axios';
const BASE_URL =''
const getBaseUrl = ({ BPA_API_PROTOCOL = 'https', BPA_API_DOMAIN = 'localhost', BPA_API_PORT }) => {
  let url = `${BPA_API_PROTOCOL}://${BPA_API_DOMAIN}`;

  if (BPA_API_PORT) {
    url = `${url}:${BPA_API_PORT}`;
  }
  url = `${url}/api/`;
  return url;
};
const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  crossDomain: true,
  responseType: 'JSON'
});




export default HttpClient;
