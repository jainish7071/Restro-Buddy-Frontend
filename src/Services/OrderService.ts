import { API_CONSTANT } from '../common/constants/ApiConstants';
import axiosInstance from './AxiosInstance';

export const OrderService = {
    fetchOrder: async (orderId: number): Promise<any> => {
        try {
            const response = await axiosInstance.get(API_CONSTANT.ORDER.FETCH + orderId);
            return response.data;

        } catch (error) {
            throw error;
        }
    }
}