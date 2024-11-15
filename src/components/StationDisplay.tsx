import React from 'react';
import formatText from '../helpers/formatText';
import { subStationLocation } from '../interfaces/stationDetails';

const StationDisplay = ({ loc }: { loc: subStationLocation }) => {

    const address = Object.values(loc).join(' ');

    return (
        <div className = "flex-container-station">
            
            <div key = { 'Location' } className = "flex-box-station">
                <span className = "text-nowrap">{ formatText(address, '') }</span>
            </div>
  
        </div>
    );
};

export default StationDisplay;