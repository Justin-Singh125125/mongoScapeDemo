import React from 'react';
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
		marginBottom: 'rem'
	}
});

const NewsCard = props => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
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
			</CardActions>
		</Card>
	);
};

export default NewsCard;
