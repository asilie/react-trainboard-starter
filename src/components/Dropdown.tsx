import React, { useState } from 'react';

export interface dropdownOptions {
    value: string;
    label: string;
}

const DropdownList = ({ title, onChange }: {title: string; onChange: (e:any)=> void}) => {

    const options: dropdownOptions[] = [
        { value: 'LST', 
            label: 'London Liverpool Street (LST)' }, 
        { value: 'SSD',
            label: 'Stansted Airport (SSD)' },
        { value: 'OXF',
            label: 'Oxford (OXF)' },
        { value: 'CBG',
            label: 'Cambridge (CBG)' },
        { value: 'BTN',
            label: 'Brighton (BTN)' }];

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