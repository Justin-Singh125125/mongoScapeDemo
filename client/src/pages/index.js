import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import NoArticles from '../components/NoArticles';

const useStyles = theme => ({
	root: {
		flexGrow: 1,
		padding: '2rem'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});

class Index extends React.Component {
	state = {
		articles: []
	};

	componentDidMount() {
		this.handleGetArticles();
	}

	handleGetArticles = async () => {
		const resultsArticle = await axios.get('/api/articles');
		this.setState({ articles: resultsArticle.data });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					{this.state.articles.length === 0 ? (
						<NoArticles text='YOU HAVE NO ARTICLES! GO SCRAPE!' />
					) : (
						<>
							{this.state.articles.map(a => (
								<Grid item xs={12}>
									<Card key={a._id} heading={a.heading} info={a.info} link={a.link} />
								</Grid>
							))}
						</>
					)}
				</Grid>
			</div>
		);
	}
}

export default withStyles(useStyles)(Index);
