import React, {useEffect, useState} from "react";
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import NoArticles from "../components/NoArticles";
import Card from "../components/Card";

const useStyles = makeStyles(theme=>({ 
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

const Saved =()=> {


    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(()=>{

        handleGetSavedArticles();

    }, [savedArticles])

    const handleGetSavedArticles = async ()=>{
        const saved = await axios.get("/api/articles/saved");
        setSavedArticles(saved.data);
    }


        const classes = useStyles();
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {savedArticles.length !== 0 ? 
                        <>
                        {savedArticles.map(a=>(
                                  <Grid item xs={12}>
                            <Card key={a._id} heading={a.heading}
                                link={a.link}
                                info={a.info}
                            />
                            </Grid>
                        ))}
                       </>
                            :     
                            
                            <Grid item xs={12}>
                            <NoArticles text="YOU HAVE NO ARTICLES SAVED! WHAT ARE YOU DOING?" />
                            </Grid>
                    }
                  


                </Grid>
            </ div>
        )

}

export default Saved;