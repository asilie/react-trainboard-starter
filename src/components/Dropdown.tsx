import React, { useEffect,useState } from 'react';
import dropdownOptions from '../interfaces/dropdownOptions';

const DropdownList = ({ title, stations, onChange }: {title: string; stations: dropdownOptions[]; onChange: (e: string) => void}) => {

    const options = stations;

    const [selectedValue, setSelectedValue] = useState(() => {
        if (!stations.length) {
            return '';
        }
        return stations[0].value;
    });

    useEffect(() => {
        onChange(selectedValue);
    }, [selectedValue, onChange]);
       
    return (
        <div className = "label-side">
            <span> {title} </span>
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