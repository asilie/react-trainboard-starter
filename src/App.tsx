import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FlexBoxIcons from './components/FlexBoxIcons';
import SubmitForm from './components/FormForDepartures';
import Station from './components/Station';
import StationDisplay from './components/StationDisplay';
import Stations from './components/Stations';
import dataMinimise from './helpers/dataMinimise';
import example from './helpers/stationDetailsExample';

const App = () => {

    const users = JSON.parse(example);

    return (       
        <BrowserRouter>
            <div className = "App">

                <h1 className = 'flex-box-stationDetails'><span className = "text-stationDetails">{ 'Station Details' }</span></h1>

                <Stations/>
               
            </div>
        </BrowserRouter>);
};

export default App;

/**/ 