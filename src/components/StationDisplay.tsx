import React from 'react';
import formatText from '../helpers/formatText';
import { SubStationLocation } from '../interfaces/StationDetails';

const StationDisplay = ({ loc }: { loc: SubStationLocation }) => {

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