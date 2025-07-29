import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',

    },
    timeout: 5000, // optional timeout
});

export default api;