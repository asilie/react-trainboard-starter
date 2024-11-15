import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FlexBoxIcons from './components/FlexBox';
import SubmitForm from './components/Form';
import Station from './components/Station';
import Stations from './components/Stations';
import Table from './components/Table';
import dataMinimise from './helpers/dataMinimise';
import example from './helpers/stationDetailsExample';
import { stationDetails, subStationLocation } from './interfaces/stationDetails';

const App = () => {

    const users = JSON.parse(example);

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

                <FlexBoxIcons facilitiesList = { dataMinimise(users).facilitiesList }/>

            </div>
        </BrowserRouter>);
};

export default App;

/**/ 