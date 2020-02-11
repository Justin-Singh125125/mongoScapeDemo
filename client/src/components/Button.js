import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            marginRight: "2rem",
        },
    },
    button: {
        marginRight: "1rem"
    }
    ,
}));

export default function ContainedButtons(props) {
    const classes = useStyles();

    return (


        <Button onClick={props.handleRemoveArticle} className={classes.button} variant="contained" color={props.color}>
            {props.text}
        </Button>


    );
}
