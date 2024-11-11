import React, { useState } from 'react';

export interface dropdownOptions {
    value: string;
    label: string;
}

const DropdownList = ({ title }: {title: string}) => {

    const [selectedValue, setSelectedValue] = useState('');

    const options: dropdownOptions[] = [
        { value: 'LST', 
            label: 'London Liverpool Street (LST)' }, 
        { value: 'SSD',
            label: 'Stansted Airport (SSD)' }];
       
    return (
        <div className = "label-side">
            <p> {title} </p>
            <select 
                value = { selectedValue }
                onChange = { (e) => setSelectedValue(e.target.value) }>

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