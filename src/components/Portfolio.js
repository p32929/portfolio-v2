import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LeftPart from "./LeftPart";

var topBottomMargins = 84;
var leftRightMargins = 158;

const styles = {
    parent: {
        backgroundColor: "#CDDC39",
        height: window.innerHeight,
        width: window.innerWidth
    },
    contents: {
        marginTop: topBottomMargins,
        marginBottom: topBottomMargins,
        marginLeft: leftRightMargins,
        marginRight: leftRightMargins,
        flex: 1
    },
    checker: {
        background: "#FFF"
    }
}

const Portfolio = () => {
    return (
        <Grid container style={styles.parent}>
            <Paper elevation={16} style={styles.contents}>
                <Grid style={{height: '100%', width: '100%'}} container direction='row'>
                    <LeftPart/>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Portfolio;