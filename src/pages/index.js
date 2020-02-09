import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: "2rem"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    console.log(window.location.pathname)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card />
                </Grid>

            </Grid>
        </div>

    );
}
