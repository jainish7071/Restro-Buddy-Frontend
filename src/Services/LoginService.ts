import { API_CONSTANT } from '../common/constants/ApiConstants';
import AxiosInstance from './AxiosInstance';

interface LoginCredentials {
    email: string;
    password: string;
}

interface UserData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
}

export const LoginService = {
    login: async (credentials: LoginCredentials): Promise<any> => {
        try {
            const response = await AxiosInstance.post(API_CONSTANT.USER.LOGIN, credentials);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    signup: async (userData: UserData): Promise<any> => {
        try {
            const response = await AxiosInstance.post(API_CONSTANT.USER.SAVE_USER, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Add more API call functions as needed
};
