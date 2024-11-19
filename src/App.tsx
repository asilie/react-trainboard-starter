import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FlexBoxIcons from './components/FlexBoxIcons';
import SubmitForm from './components/Form';
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

                <h1 className = 'flex-box-stationDetails'><span className = "text-stationDetails">{ 'Station Details' }</span></h1>

                <StationDisplay loc = { dataMinimise(users).loc } /> 
                
                <FlexBoxIcons facilitiesList = { dataMinimise(users).facilitiesList }/>

            </div>
        </BrowserRouter>);
};

export default App;

/**/ 