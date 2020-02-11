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
	const [allComments, setAllComments] = useState([]);

	const [isComment, setIsComment] = useState(false);
	const [userComment, setUserComment] = useState("");

	useEffect(() => {

		setIsComment(true);

		if(selectedArticle._id){
			handleGetComments(selectedArticle._id);
		}
	
	}, [selectedArticle]);

	const handleSelectArticle =  (selectedArticle) => {
		setSelectedArticle(selectedArticle);
	}
	const handleRemoveArticle = () => {
		setSelectedArticle({ _id: "", heading: "", info: "", link: "" });
	}

	const handleGetComments = async (articleId)=>{
		const resultsComments = await axios.get(`/api/comments/${articleId}`)
		setAllComments(resultsComments.data);
	}

	const handleCreateComment = async ()=>{

		const commentObj={};
		commentObj.comment = userComment;
		commentObj.articleId = selectedArticle._id
		await axios.post("/api/comments", commentObj)
		handleGetComments();
	}

	const handleInputChange = (e)=>{
		setUserComment(e.target.value);
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
							<Form userComment={userComment} handleInputChange={handleInputChange} label="Comment" />
							<Button  handleCreateComment={handleCreateComment}  color="primary" text="Submit" />
							<Button handleRemoveArticle={handleRemoveArticle} color="secondary" text="Cancel" />


							{allComments.length !== 0 ?

							allComments.map(c=>(
									<Card   isComment={isComment} comment={c.comment} />
							))
							:
							<p>No Comments</p>
							}
							
								
						</Grid>
					</>
				}


			</Grid>
		</div>
	);
};

export default Index;
