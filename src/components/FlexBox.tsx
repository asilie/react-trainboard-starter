import React from 'react';
import { FaCheck } from 'react-icons/fa';
import keyMapper from '../helpers/keyFormatter';

const FlexBoxIcons = ({ facilitiesList }: { facilitiesList: string[] }) => {

    return (
        <div className = "flex-container">
            {facilitiesList.map((item) => (
                <div key = { item } className = "flex-box">
                    <FaCheck color = '#42c7a8'/>
                    <span className = "text">{keyMapper(item)}</span>
                </div>
            ))}
        </div>
    );
};

export default FlexBoxIcons;