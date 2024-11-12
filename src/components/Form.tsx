import React, { useEffect,useState } from 'react';
import axios from 'axios';
import formatTimezoneOffset from '../helpers/formatTimeZoneOffset';
import DropdownList from './Dropdown';

interface navigationParameters {
    departureCRS: string;
    arrivalCRS: string;
    time: string;
    timeWindow: string;
}

const SubmitForm = () => {

    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [redirect, setRedirect] = useState(false);
  
    const handleSubmit = (e: any) => {
        alert(`Departure station ${departure} and arrival station ${arrival} submitted`);
        
        // Prevent the browser from reloading the page
        e.preventDefault();
        setRedirect(true);
        
    };

    useEffect(() => {

        // Formatting date to match API
        const date = new Date();
        const timeZoneOffset = formatTimezoneOffset(date.getTimezoneOffset());
        const dateFormat = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}T${date.getHours()}%3A${date.getMinutes()}%3A${date.getSeconds()}.${date.getMilliseconds()}%2B${timeZoneOffset}`;

        const navParams: navigationParameters = {
            departureCRS: departure,
            arrivalCRS: arrival,
            time: dateFormat,
            timeWindow: '120',
        };

        const urlString = `https://int-dev1.tram.softwire-lner-dev.co.uk/v1/stationDetails/${navParams.departureCRS}`;
        // this is for upcomingDepartures: const urlString = `https://int-dev1.tram.softwire-lner-dev.co.uk/v1/upcomingDepartures?crs=${navParams.departureCRS}&time=${navParams.time}&timeWindow=${navParams.timeWindow}&filterCrs=${navParams.arrivalCRS}`;
        
        axios.get(urlString, { headers: {
            'X-API-KEY': process.env.REACT_APP_X_API_KEY,
        } }).then((response) => {
            console.log(response);
        });
    }, [redirect]);
   
    return (
        <form  onSubmit = { handleSubmit }>
            <DropdownList title = { 'Departure Station :' }  onChange = { setDeparture }/> 
            <DropdownList title = { 'Arrival Station :' }  onChange = { setArrival }/> 
            <hr />
            <button type = "submit">Submit</button>
        </form>

    );
};

export default SubmitForm;