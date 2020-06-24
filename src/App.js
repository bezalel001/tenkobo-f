import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';

function App() {
	return (
		<Switch>
			<Route path='/' component={HomePage} />
		</Switch>
	);
}

export default App;
