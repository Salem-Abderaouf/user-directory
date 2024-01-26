import { AxiosError } from "axios";
import api from "../config/api"
import { Users } from "../types/types";

export const getUsers = async (page:number=1, usersPerPage:number = 10): Promise<Users[] | null> => {
    try {
        const response = await api.get('/api',{
            params: {
                page,
                results: usersPerPage,
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error as AxiosError<unknown, any>);
        return null;
    }
}

const handleApiError = (error:AxiosError):void => {
    if (error.response) {
        console.error('API Error - Response:', error.response.data);
        console.error('API Error - Status:', error.response.status);
    } else if (error.request) {
        console.error('API Error - No Response:', error.request);
    } else {
        console.error('API Error:', error.message);
    }
    // TODO: Send error details to error monitoring service (Sentry)
};