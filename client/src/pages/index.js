import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import NoArticles from '../components/NoArticles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '2rem'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const Index = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{props.articles.length === 0 ? (
					<NoArticles text='YOU HAVE NO ARTICLES! GO SCRAPE!' />
				) : (
					<>
						{props.articles.map(a => (
							<Grid item xs={12}>
								<Card key={a._id} heading={a.heading} info={a.info} link={a.link} />
							</Grid>
						))}
					</>
				)}
			</Grid>
		</div>
	);
};

export default Index;
