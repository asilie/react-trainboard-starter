import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import DropdownList from './components/Dropdown';
import { dropdownOptions } from './components/Dropdown';
import Station from './components/Station';
import Stations from './components/Stations';

const App = () => (
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

            <div>
                <DropdownList title = { 'Departure Station :' }/> 
            </div>

            <div>
                <DropdownList title = { 'Arrival Station :' }/> 
            </div>

        </div>
    </BrowserRouter>
);

export default App;
