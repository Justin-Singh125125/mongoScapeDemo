import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: "80%",
        },
    },
}));

const Form = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField onChange={props.handleInputChange} name="comment-field" value={props.userComment} id="standard-basic" label={props.label} />

        </form>
    );
}

export default Form;