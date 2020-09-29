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

import React, {useEffect} from 'react';
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
    const bigDevice = useMediaQuery(theme.breakpoints.up(1500))

    useEffect(() => {
        actions.setBelowSm(belowSm)
        actions.setBigDevice(bigDevice)
    }, [bigDevice, belowSm])

    return (
        <Grid container style={{backgroundColor: state.primaryColor, ...styles.parent}}>

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
