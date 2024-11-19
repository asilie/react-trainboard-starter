import axios from 'axios';
import StationResponseSchema from '../interfaces/stationsResponse';

export const fetchStations = async () => {

    const urlString = process.env.REACT_APP_API_URL + '/v1/stations';
    
    try {
        const response = await axios.get(urlString, { headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
        } });
        return StationResponseSchema.parse(response.data); 
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API request failed:', {
                status: error.response?.status,
                message: error.message,
                url: urlString,
            });
        } else {
            console.error('Data validation failed:', error);
        }
        throw new Error('Failed to fetch stations data');
    }
   
};
