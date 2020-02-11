import React, { useState } from 'react';
import { Link as ReactLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
		marginBottom: '1rem',
		marginTop: '1rem'
	}
});

const NewsCard = props => {
	const classes = useStyles();



	return (

		<>
			{props.isComment !== true ?
				<Card onClick={() => props.handleSelectArticle(props.obj)} className={classes.root}>
					<CardActionArea>
						<Link href={props.link} underline={'none'} target='_blank'>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{props.heading}
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									{props.info}
								</Typography>
							</CardContent>
						</Link>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Save
						</Button>


						<Button size='small' color='primary'>
							Comment
						</Button>

					</CardActions>
				</Card>

				:
				<Card className={classes.root}>

					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{props.comment}
						</Typography>
					</CardContent>
				</Card>
			}

		</>
	);
};

export default NewsCard;
