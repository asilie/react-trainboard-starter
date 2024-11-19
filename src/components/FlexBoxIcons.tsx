import React from 'react';
import keyMapper from '../helpers/keyFormatter';
import DynamicIcon from './DynamicIcon';

const FlexBoxIcons = ({ facilitiesList }: { facilitiesList: string[] }) => {
    return (
        <div className = "flex-container">
            {facilitiesList.map((item) => {
                return (
                    <div key = { item } className = "flex-box">
                        <DynamicIcon iconName = { item } iconProps = { { color: '#42c7a8' } }/>
                        <span className = "text">{keyMapper(item)}</span>
                    </div>);
            },
            )}
           
        </div>
    );
};

export default FlexBoxIcons;