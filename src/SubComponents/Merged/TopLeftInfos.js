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
import {useOvermind} from "../../Utils/OvermindHelper";
import SvgHelper from "../Helpers/SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {useLocation} from "react-router-dom";

const styles = {
    divider: {
        height: 1,
        marginTop: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const TopLeftInfos = () => {
    let location = useLocation();
    const {state, actions} = useOvermind()

    return (
        <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
            <Grid>
                {
                    state.belowSm && <IconButton size='small' onClick={() => {
                        actions.setDrawerState(true);
                    }}>
                        <SvgHelper
                            path='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
                            styles={{padding: 8}}
                            size={36}/>
                    </IconButton>
                }
                <Button disabled style={styles.currentRoute}>
                    {location.pathname.replace("/", "")}
                </Button>
            </Grid>
            <Divider orientation="horizontal" style={{
                backgroundColor: state.primaryColor, ...styles.divider,
                width: state.belowSm ? 160 : 200
            }}
                     flexItem/>
        </Grid>
    );
};

export default TopLeftInfos;
