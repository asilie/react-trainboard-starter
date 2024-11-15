import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SubmitForm from './components/Form';
import Station from './components/Station';
import Stations from './components/Stations';
import Table from './components/Table';
import dataMinimise from './helpers/dataMinimise';
import example from './helpers/stationDetailsExample';
import { stationDetails, subStationLocation } from './interfaces/stationDetails';

const App = () => {

    let users: stationDetails = {
        location: {
            longitude: 51.53089,
            latitude: -0.1229213,
            addressLines: 'London Kings Cross',
            postCode: 'N1 9AL',
        },
        facilities: { 
            stationFacilities: {
                atmMachine: {
                    openingTimes: 'Monday to Friday: 06:00-22:00<br>Saturday: 06:00-22:00<br>Sunday: 07:45-22:00',
                    locationInfo: 'In the Main Concourse opposite the shops<br>',
                    generalInfo: 'The station will remain open until the last train departs.',
                } } } };

    console.log(example);
    users = JSON.parse(example);
    console.log(typeof users);

    return (       
        <BrowserRouter>
            <div className = "App">
                <Routes>
                    <Route path = "/stations">
                        <Route path = ":id" element = { <Station/> }/>
       
                        <Route index element = { <Stations/> }/>
                    </Route>
                </Routes>
                <footer>
                    <Link to = "/stations">Stations</Link>
                </footer>

                <SubmitForm />

                <h1>Station Details</h1>

                <Table data = { users } loc = { dataMinimise(users).loc } facilitiesList = { dataMinimise(users).facilitiesList }  />

            </div>
        </BrowserRouter>);
};

export default App;

/**/ 