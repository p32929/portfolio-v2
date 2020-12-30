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
import {useOvermind} from "../Utils/OvermindHelper";
import {getContentHeightWidth} from '../Utils/GlobalMethods'
import Paper from "@material-ui/core/Paper";
import AvatarText from "../SubComponents/Helpers/AvatarText";
import LeftMenus from "../SubComponents/Helpers/LeftMenus";
import SmallBottomLinks from "../SubComponents/Merged/SmallBottomLinks";

const LeftPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContentHeightWidth(state.belowSm), width: '100%'}} container item xs={11} sm={11}
              md={3} lg={3}
              xl={2}>
            <Paper elevation={12} style={{...getContentHeightWidth(state.belowSm), width: '100%'}}>
                <Grid style={{...getContentHeightWidth(state.belowSm), width: '100%'}} container direction="column"
                      justify="space-around" alignContent='center' alignItems="center">

                    <AvatarText/>
                    <LeftMenus/>
                    <SmallBottomLinks/>

                </Grid>
            </Paper>
        </Grid>
    );
};

export default LeftPart;
