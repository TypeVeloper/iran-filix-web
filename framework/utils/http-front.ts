import axios from "axios";
const http_front = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Change request data/error here
http_front.interceptors.request.use(
    (config) => {
        config.url = `${config.url}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default http_front;
