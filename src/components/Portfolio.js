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
        maxWidth: window.innerWidth,
        height: window.innerHeight,
        width: window.innerWidth
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
    if (matches) {
        topBottomMargins = 24
        leftRightMargins = 24
    } else {
        setDrawerState(true)
    }

    return (
        <Grid container style={{backgroundColor: props.primaryColor, ...styles.parent}}>
            <Router>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Paper elevation={16} style={{
                        flex: 1,
                        marginLeft: leftRightMargins,
                        marginRight: leftRightMargins,
                        marginTop: topBottomMargins,
                        marginBottom: topBottomMargins,
                        maxHeight: window.innerHeight - topBottomMargins * 2,
                        maxWidth: window.innerWidth - leftRightMargins * 2,
                        height: window.innerHeight - topBottomMargins * 2,
                        width: window.innerWidth - leftRightMargins * 2
                    }}>

                        <Grid container direction='row'>
                            {
                                props.drawerState && <LeftPart/>
                            }
                            {
                                getRightPartComponent(matches, props.drawerState)
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Router>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(Portfolio);
