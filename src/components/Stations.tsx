import React, { useEffect, useState } from 'react';
import { fetchStations } from '../helpers/fetchStations';
import StationInformation from '../interfaces/StationInformation';
import StationResponse from '../interfaces/stationsResponse';

const isKeyInObj = (key: string, obj: StationInformation): key is keyof StationInformation => {
    return key in obj;
};

const filterNonNullByProperty = (array: StationInformation[], property: string) => {
    if (isKeyInObj(property, array[0])) {
        return array.filter(item => item[property] !== null && item[property] !== undefined);
    } 
};

type TransformedStation = {
    value: string | null;
    label: string;
}

const handleStations = async () => {
    const stations = await fetchStations();
    if (stations) {
        const filteredStations = filterNonNullByProperty(stations.stations, 'crs');
        const displayStations = filteredStations?.map((station): TransformedStation => {
            return { value: station.crs, label: station.name + `(${station.crs})` };
        });
        console.log(displayStations);
    }
    
};

const Stations: React.FC = () => {

    const [allStations, setAllStations] = useState([]);

    useEffect(() => {

        handleStations();
    }, []);

    return (
        <div>
            Stations!
        </div>
    );
};

export default Stations;
