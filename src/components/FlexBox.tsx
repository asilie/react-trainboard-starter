import React from 'react';
import * as icons from 'react-icons';
import iconMap from '../helpers/iconMapExample';
import keyMapper from '../helpers/keyFormatter';
import Icon from './Icon';

const FlexBoxIcons = ({ facilitiesList }: { facilitiesList: string[] }) => {
    console.log(facilitiesList);
    return (
        <div className = "flex-container">
            {facilitiesList.map((item) => {
                console.log(typeof item);
                return (
                    <div key = { item } className = "flex-box">
                        <Icon iconName = { item } iconProps = { { color: '#42c7a8' } }/>
                        <span className = "text">{keyMapper(item)}</span>
                    </div>);
            },
            )}
        </div>
    );
};

export default FlexBoxIcons;