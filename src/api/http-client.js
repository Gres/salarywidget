import axios from 'axios';

const BASE_URL = 'https://api.teleport.org/api'

const HttpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    crossDomain: true,
    responseType: 'JSON'
});


export default HttpClient;
