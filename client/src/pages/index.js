import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import NoArticles from '../components/NoArticles';
import Form from "../components/Form";
import Button from "../components/Button";

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

	const [selectedArticle, setSelectedArticle] = useState({ _id: "", heading: "", info: "", link: "" });
	const [isComment, setIsComment] = useState(false);

	const handleSelectArticle = (selectedArticle) => {
		setSelectedArticle(selectedArticle);
		setIsComment(true);
	}
	const handleRemoveArticle = () => {
		setSelectedArticle({ _id: "", heading: "", info: "", link: "" });
	}


	return (
		<div className={classes.root}>
			<Grid container spacing={3}>

				{selectedArticle._id === "" ?
					<>
						{props.articles.length === 0 ? (
							<NoArticles text='YOU HAVE NO ARTICLES! GO SCRAPE!' />

						)

							: (
								<>
									{props.articles.map(a => (
										<Grid item xs={12}>
											<Card

												key={a._id}
												heading={a.heading}
												info={a.info}
												link={a.link}
												obj={a}
												handleSelectArticle={handleSelectArticle}
											/>
										</Grid>
									))}
								</>
							)}
					</>
					:
					<>
						<Grid item xs={12}>

							<Card heading={selectedArticle.heading} info={selectedArticle.info} link={selectedArticle.link} />
							<Form label="Comment" />
							<Button color="primary" text="Submit" />
							<Button handleRemoveArticle={handleRemoveArticle} color="secondary" text="Cancel" />

							<Card isComment={isComment} />

						</Grid>
					</>
				}


			</Grid>
		</div>
	);
};

export default Index;
