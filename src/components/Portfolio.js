/*
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RightPart from "./RightPart";
import {MemoryRouter, Route} from "react-router-dom";
import {connect} from 'react-redux'
import LeftPart from "./LeftPart";
import Redirect from "react-router-dom/es/Redirect";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {setDrawerState} from "../vars/ReduxStates";
import {getHeightWidthObject} from "../vars/SomeLazyFunctions";

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
    if (!matches) {
        setDrawerState(true)
    }

    return (
        <Grid container style={{backgroundColor: props.primaryColor, ...styles.parent}}>
            <MemoryRouter>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Paper elevation={16} style={getHeightWidthObject(matches)}>

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
            </MemoryRouter>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
    widthLowerThanBreakpoint: state.widthLowerThanBreakpoint
})

export default connect(mapStateToProps)(Portfolio);
