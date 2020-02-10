import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

import Index from './pages/index';
import Saved from './pages/saved';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Route exact path='/' component={Index} />
			<Route exact path='/saved' component={Saved} />
		</Router>
	);
};
export default App;
