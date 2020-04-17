import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RightPart from "./RightPart";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux'
import LeftPart from "./LeftPart";
import Redirect from "react-router-dom/es/Redirect";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {setDrawerState} from "../vars/ReduxStates";

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
    checker: {
        background: "#FFF"
    }
}

const getRightPartComponent = (matches, drawerState) => {
    if (matches) {
        if (drawerState) {
            console.log("NOT SHOWING RIGHT1")
            return null;
        } else {
            console.log("SHOWING RIGHT1")
            return <RightPart/>
        }
    } else {
        console.log("SHOWING RIGHT2")
        return <RightPart/>
    }
}

const Portfolio = (props) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if (!matches) {
        setDrawerState(true)
    }

    return (
        <Grid container style={{backgroundColor: props.primaryColor, ...styles.parent}}>
            <Router>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Paper elevation={16} style={styles.paper}>
                    <Grid style={{
                        flex: 1,
                        height: window.innerHeight - topBottomMargins * 2,
                        maxHeight: window.innerHeight - matches ? topBottomMargins * 8 : topBottomMargins * 2,
                    }} container direction='row'>
                        {
                            props.drawerState && <LeftPart/>
                        }
                        {
                            getRightPartComponent(matches, props.drawerState)
                        }
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
