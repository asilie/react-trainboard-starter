import React, { FormEvent,useEffect, useState } from 'react';
import dataMinimise from '../helpers/dataMinimise';
import { fetchStationDetails } from '../helpers/fetchStationDetails';
import { fetchStations } from '../helpers/fetchStations';
import { StationDetails } from '../interfaces/stationDetails';
import StationInformation from '../interfaces/StationInformation';
import TransformedStation from '../interfaces/TransformedStation';
import DropdownList from './Dropdown';
import FlexBoxIcons from './FlexBoxIcons';
import StationDisplay from './StationDisplay';

const isKeyInObj = (key: string, obj: StationInformation): key is keyof StationInformation => {
    return key in obj;
};

const filterNonNullByProperty = (array: StationInformation[], property: string) => {
    if (isKeyInObj(property, array[0])) {
        return array.filter(item => item[property] !== null && item[property] !== undefined);
    } else {
        throw new Error('Property is not found in station information.');
    }
};

const handleStations = async () => {
    const stations = await fetchStations();
    if (stations) {
        const filteredStations = filterNonNullByProperty(stations.stations, 'crs');
        const displayStations = filteredStations?.map((station): TransformedStation => {
            if (station.crs){
                return { value: station.crs, label: station.name + ` (${station.crs})` };
            } else {
                throw new Error('Station CRS is null.');
            }
        });
        return displayStations;
    } else {
        throw new Error('Station list not found');
    }
    
};

const Stations: React.FC = () => {
    const [render, setRender] = useState(false);
    const [allStations, setAllStations] = useState<TransformedStation[]>([]);
    const [selectedStation, setSelectedStation] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [stationDetails, setStationDetails] = useState<StationDetails>({} as StationDetails);

    useEffect(() => {
        const getStations = async () => {
            try {
                const stations = await handleStations();
                setAllStations(stations);
            } catch {
                throw new Error('Station list not found.');
            }

        };
        getStations();
    }, []);

    useEffect(() => {
        // get station details for selected station
        const getStationDetails = async() =>{
            const stationDetails = await fetchStationDetails(selectedStation);
            if (stationDetails) {
                setStationDetails(stationDetails);
            } 
        };
       
        getStationDetails();
        setRedirect(false);

    }, [redirect]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        alert(`Selected station ${selectedStation} submitted`);
        
        // Prevent the browser from reloading the page
        e.preventDefault();
        setRedirect(true);
        
    };

    if (allStations.length === 0) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <form onSubmit = { handleSubmit }>
            <div className = 'flex-container'>
                <DropdownList title = { 'Choose Station :' } stations = { allStations } onChange = { setSelectedStation }/> 
            
                <button type = "submit" className = 'button'>Submit</button>
            </div>
            <div>
                { Object.keys(stationDetails).length !== 0 &&
                    (<StationDisplay loc = { dataMinimise(stationDetails).loc } />)
                }
            </div>
            <div>
                { Object.keys(stationDetails).length !== 0 &&
                    <FlexBoxIcons facilitiesList = { dataMinimise(stationDetails).facilitiesList }/>
                }
            </div>
            
        </form>

    );
};

export default Stations;
