import React, { useState } from 'react';
import dropdownOptions from '../interfaces/dropdownOptions';

const DropdownList = ({ title, stations, onChange }: {title: string; stations: dropdownOptions[]; onChange: (e: string)=> void}) => {

    const options = stations;

    const [selectedValue, setSelectedValue] = useState(options[0].value);

    // passes default value (LST) if dropdown is not touched by user
    onChange(selectedValue);
       
    return (
        <div className = "label-side">
            <p> {title} </p>
            <select 
                name = { title }
                value = { selectedValue }
                onChange = { (e) => {onChange(e.target.value); 
                    setSelectedValue(e.target.value);} }>

                {options.map((option) => (
                    <option key = { option.value } value = { option.value }>
                        {option.label}
                    </option>
                ))}

            </select>
        </div>

    );
};
        
export default DropdownList;