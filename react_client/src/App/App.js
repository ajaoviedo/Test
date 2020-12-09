import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import "./App/static/css/bootstrap.min"

import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';

import "bootstrap/dist/css/bootstrap.min.css"

const App = (props) => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/list' component={List} />
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	);
};

export default App;