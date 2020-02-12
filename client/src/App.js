import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';

import Navbar from './components/Navbar';

import Index from './pages/index';
import Saved from './pages/saved';

const App = () => {
	//we pass the array parameter a the end so this use effect does not run
	//more than one
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		handleGetArticles();
	}, []);

	const handleScrapeArticles = async () => {
		const resultsArticle = await axios.post('https://mongo-scrape-demo1.herokuapp.com/api/articles');
		setArticles(resultsArticle.data);
	};
	const handleGetArticles = async () => {
		const resultsArticle = await axios.get('https://mongo-scrape-demo1.herokuapp.com/api/articles');
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
