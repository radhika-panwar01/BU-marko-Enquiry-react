import apiClient from '../api/apiClient';
import { API_ENDPOINTS } from '../api/endpoints';

export const submitInquiry = async (payload) => {
    try {
        const response = await apiClient.post(API_ENDPOINTS.INQUIRY.SUBMIT, {
            data: payload,
        });
        return { success: true, data: response.data };
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            error?.message ||
            'Something went wrong. Please try again later.';
        return { success: false, error: message };
    }
};
