import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';

const FillingStationPage = () => (
	<div>
		<h1>Conoil Filling Station</h1>
	</div>
);

function App() {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/conoil' component={FillingStationPage} />
		</Switch>
	);
}

export default App;
