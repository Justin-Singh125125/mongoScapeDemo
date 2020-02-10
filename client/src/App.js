import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';

import Navbar from './components/Navbar';

import Index from './pages/index';
import Saved from './pages/saved';
import Axios from 'axios';

const App = () => {
	const [articles, setArticles] = useState([]);

	const handleScrapeArticles = async () => {
		const resultsArticle = await axios.post('/api/articles');
		setArticles(resultsArticle.data);
	};
	const handleGetArticles = async () => {
		const resultsArticle = await axios.get('/api/articles');
		setArticles(resultsArticle.data);
	};
	return (
		<Router>
			<Navbar handleScrapeArticles={handleScrapeArticles} />
			<Route exact path='/' component={() => <Index articles={articles} handleGetArticles={handleGetArticles} />} />
			<Route exact path='/saved' component={Saved} />
		</Router>
	);
};
export default App;
