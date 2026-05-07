import axios from 'axios';

const BASE_URL = 'https://app.applatus.com';

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default apiClient;
