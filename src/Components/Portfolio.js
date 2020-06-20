import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import {MemoryRouter, Redirect, Route} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getContainerHeight} from '../Others/GlobalMethods'
import LeftPart from "./BasicStructures/LeftPart";
import RightPart from "./BasicStructures/RightPart";

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

const Portfolio = () => {
    const {state, actions} = useOvermind()
    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        actions.setBelowSm(belowSm)
    }, [])

    return (
        <Grid container style={{backgroundColor: state.primaryColor, ...styles.parent}}>
            <MemoryRouter>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Paper elevation={16} style={getContainerHeight(belowSm)}>
                        <Grid container direction='row'>
                            {
                                state.drawerState && <LeftPart/>
                            }
                            <RightPart/>
                        </Grid>
                    </Paper>
                </Grid>
            </MemoryRouter>
        </Grid>
    );
};

export default Portfolio;
