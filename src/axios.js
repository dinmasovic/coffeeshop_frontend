import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api/',
    headers: {
        'Content-Type': 'application/json',

    },
    timeout: 5000, // optional timeout
});

export default api;