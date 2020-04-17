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
import SvgHelper from "./SvgHelper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {primaryColor} from '../vars/MainItems'
import {connect} from "react-redux";

const TypographyWithIcon = (props) => {
    return (
        <Grid style={{padding: 8}} container direction='row' alignItems='flex-start' alignContent='center'>
            <SvgHelper
                size={18}
                color={primaryColor}
                path='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/>
            <Typography style={{
                marginLeft: 8,
                marginRight: 8,
                fontSize: 14,
                fontWeight: 'bold',
                color: "#757575"
            }}>{props.children}</Typography>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(TypographyWithIcon);
