import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import {MemoryRouter, Redirect, Route} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getContentHeightWidth, getParentHeightWidth} from '../Others/GlobalMethods'
import LeftPart from "./BasicStructures/LeftPart";
import RightPart from "./BasicStructures/RightPart";

const styles = {
    parent: getParentHeightWidth(),
    checker: {
        background: "#FFF"
    }
}

const getRightPartComponent = (state) => {
    if (state.belowSm) {
        if (state.drawerState) {
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

const Portfolio = () => {
    const {state, actions} = useOvermind()
    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container style={{backgroundColor: state.primaryColor, ...styles.parent}}>
            {
                actions.setBelowSm(belowSm)
            }
            <MemoryRouter>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Paper elevation={16} style={getContentHeightWidth(belowSm)}>
                        <Grid container direction='row'>
                            {
                                state.drawerState && <LeftPart/>
                            }
                            {
                                getRightPartComponent(state)
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </MemoryRouter>
        </Grid>
    );
};

export default Portfolio;
