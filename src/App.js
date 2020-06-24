import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';
import FuelStationPage from './pages/fuel-station/fuel-station.component';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/fuel-station' component={FuelStationPage} />
		</Switch>
	);
}

export default App;
