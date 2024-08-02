import { API_CONSTANT } from "../common/constants/ApiConstants";
import axiosInstance from "./AxiosInstance";

export const MenuService = {
    fetchMenu: async (): Promise<any> => {
        try {
            const response = await axiosInstance.get(API_CONSTANT.MENU.FETCH);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}