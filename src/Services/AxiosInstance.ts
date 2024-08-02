import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { notification } from 'antd';

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add any custom request configurations here
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        // Handle errors here
        const errorMessage = "Something Went Wrong!!!. Please Try After Some time!";

        // Show a notification for the error
        notification.error({
            message: 'Error',
            description: errorMessage,
        });

        return Promise.reject(error);
    }
);

export default axiosInstance;
