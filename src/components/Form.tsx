import React, { useState } from 'react';
import DropdownList from './Dropdown';

const SubmitForm = () => {

    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
  
    const handleSubmit = (e: any) => {
        alert(`Departure station ${departure} and arrival station ${arrival} submitted`);
        
        // Prevent the browser from reloading the page
        e.preventDefault();
        
    };
   
    return (
        <form  onSubmit = { handleSubmit }>
            <DropdownList title = { 'Departure Station :' } value = { departure } onChange = { setDeparture }/> 
            <DropdownList title = { 'Arrival Station :' } value = { arrival } onChange = { setArrival }/> 
            <hr />
            <button type = "submit">Submit</button>
        </form>
    );
};

export default SubmitForm;