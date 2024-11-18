import axios from 'axios';
import StationResponse from '../interfaces/stationsResponse';
import StationResponseSchema from '../interfaces/stationsResponse';

export const fetchStations = async () => {

    const urlString = 'https://int-dev1.tram.softwire-lner-dev.co.uk/v1/stations';
    
    try {
        const response = await axios.get(urlString, { headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
        } });
        return StationResponseSchema.parse(response.data); 
    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return null;
    }
   
};
