import React from 'react';
import { FaCheck } from 'react-icons/fa';
import formatText from '../helpers/formatText';
import keyMapper from '../helpers/keyFormatter';
import ObjectToText from '../helpers/objectToText';
import TableProps from '../interfaces/TableProps';

const FlexBoxIcons = ({ facilitiesList }: { facilitiesList: string[] }) => {

    return (
        <div className = "flex-container">
            {facilitiesList.map((item) => (
                <div key = { item } className = "flex-box">
                    <FaCheck />
                    <span className = "text">{keyMapper(item)}</span>
                </div>
            ))}
        </div>
    );
};

export default FlexBoxIcons;