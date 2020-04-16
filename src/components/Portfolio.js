import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import {BrowserRouter as Router} from "react-router-dom";

var topBottomMargins = 84;
var leftRightMargins = 158;

const styles = {
    parent: {
        backgroundColor: "#CDDC39",
        height: window.innerHeight,
        width: window.innerWidth
    },
    paper: {
        marginTop: topBottomMargins,
        marginBottom: topBottomMargins,
        marginLeft: leftRightMargins,
        marginRight: leftRightMargins,
        flex: 1,
    },
    content: {
        flex: 1,
        height: window.innerHeight - topBottomMargins * 2,
    },
    checker: {
        background: "#FFF"
    }
}

const Portfolio = () => {

    return (
        <Router>
            <Grid container style={styles.parent}>
                <Paper elevation={16} style={styles.paper}>
                    <Grid style={styles.content} container direction='row'>
                        <LeftPart/>
                        <RightPart/>
                    </Grid>
                </Paper>
            </Grid>
        </Router>
    );
};

export default Portfolio;