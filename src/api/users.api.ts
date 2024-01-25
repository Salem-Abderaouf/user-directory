import { AxiosError } from "axios";
import api from "../config/api"

/**
 * Fetch users from the API.
 * 
 * @param {number} page - The page number 
 * @param {number} usersPerPage - Number of users per page
 * @returns {Promise<User[]>}  Promise resolving to array of User objects
*/

export const getUsers = async (page=1, usersPerPage = 10) => {
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

/**
 * Handle API errors - Log errors and potentially send to error monitoring service
 * @param {AxiosError} error - The Axios error object
 */

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