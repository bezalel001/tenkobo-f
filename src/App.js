import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop-page/shop-page.component';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/fuel-station' component={ShopPage} />
		</Switch>
	);
}

export default App;
