import axios from 'axios';
import StationResponse from '../interfaces/stationsResponse';
import StationResponseSchema from '../interfaces/stationsResponse';
import StationDetailsSchema from '../schema/StationDetailsSchema';

export const fetchStationDetails = async (crs: string) => {

    const urlString = `https://int-dev1.tram.softwire-lner-dev.co.uk/v1/stationDetails/${crs}`;
    
    try {
        const response = await axios.get(urlString, { headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
        } });
        return StationDetailsSchema.parse(response.data); 
    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return null;
    }
   
};
