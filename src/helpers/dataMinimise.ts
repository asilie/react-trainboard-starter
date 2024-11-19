import { StationDetails, subStationLocation } from '../interfaces/stationDetails';
import getKeysAtLevel from './getKeys';

const dataMinimise = (data: StationDetails) => {

    const locationData: subStationLocation = {
        addressLines: data.location.addressLines,
        postCode: data.location.postCode,
    };

    const stationFacilitiesData: string[] = getKeysAtLevel(data, 2); // specific facilities displayed at depth 2 of stationDetails
    
    return {
        loc: locationData,
        facilitiesList: stationFacilitiesData,
    };
}; 

export default dataMinimise;