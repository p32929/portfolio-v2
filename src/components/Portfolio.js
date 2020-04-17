import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RightPart from "./RightPart";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux'
import LeftPart from "./LeftPart";
import Redirect from "react-router-dom/es/Redirect";

var topBottomMargins = 84;
var leftRightMargins = 158;

const styles = {
    parent: {
        maxHeight: window.innerHeight,
        maxWidth: window.innerWidth
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
        maxHeight: window.innerHeight - topBottomMargins * 2,
    },
    checker: {
        background: "#FFF"
    }
}

const Portfolio = (props) => {

    return (
        <Grid container style={{backgroundColor: props.primaryColor, ...styles.parent}}>
            <Router>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Paper elevation={16} style={styles.paper}>
                    <Grid style={styles.content} container direction='row'>
                        {
                            props.drawerState && <LeftPart/>
                        }
                        <RightPart/>
                    </Grid>
                </Paper>
            </Router>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(Portfolio);
