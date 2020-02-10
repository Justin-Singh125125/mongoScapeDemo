import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../components/Card";
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

class Index extends React.Component {

    state = {
        articles: [

            {
                heading: "test",
                info: "lorem ipsum",
                link: ""
            },
            {
                heading: "test",
                info: "lorem ipsum",
                link: ""
            },


        ]
    }

    render() {

        const { classes } = this.props

        return (
            <div className={classes.root} >
                <Grid container spacing={3}>

                    {this.state.articles.length === 0 ?
                        <NoArticles text="YOU HAVE NO ARTICLES! GO SCRAPE!" />
                        :
                        <>
                            {this.state.articles.map((a) => (
                                <Grid item xs={12}>
                                    <Card
                                        heading={a.heading}
                                        info={a.info}
                                    />
                                </Grid>
                            ))}
                        </>
                    }


                </Grid>
            </div>

        );
    }
}

export default withStyles(useStyles)(Index);