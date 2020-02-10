import React from "react";

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import NoArticles from "../components/NoArticles";

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: "2rem"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Saved extends React.Component {


    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <NoArticles text="YOU HAVE NO ARTICLES SAVED! WHAT ARE YOU DOING?" />
                    </Grid>


                </Grid>
            </ div>
        )
    }
}

export default withStyles(useStyles)(Saved);