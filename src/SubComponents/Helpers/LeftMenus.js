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
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "./SvgHelper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {navItems} from '../../Utils/MainItems'

const styles = {
    divider: {
        height: 1,
        margin: 16,
        width: 90,
        alignSelf: 'center'
    },
    selectedRoute: {
        color: "#FFF",
        marginLeft: 8,
        marginRight: 8,
        textDecoration: 'none'
    },
    notSelectedRoute: {
        backgroundColor: "#FFF",
        color: "#212121",
        marginLeft: 8,
        marginRight: 8,
        textDecoration: 'none'
    },
}

const LeftMenus = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid container item xs sm md lg xl direction='column' justify='center' alignContent='stretch'>

            {/*         CROSS BUTTON        */}
            {
                state.belowSm && <IconButton size='small' onClick={() => {
                    actions.setDrawerState(false)
                }}>
                    <SvgHelper
                        path='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z'
                        size={18} styles={{margin: 3}}/>
                </IconButton>
            }

            <Divider orientation="horizontal"
                     style={{backgroundColor: state.primaryColor, ...styles.divider}}
                     flexItem/>

            {/*     MENUS       */}
            {
                navItems.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => {
                                if (state.belowSm) {
                                    actions.setDrawerState(false)
                                }
                            }}
                            activeStyle={{backgroundColor: state.primaryColor, ...styles.selectedRoute}}
                            component={NavLink}
                            to={item.toLowerCase()} size='small'>{item}</Button>
                    )
                })
            }

            <Divider orientation="horizontal"
                     style={{backgroundColor: state.primaryColor, ...styles.divider}}
                     flexItem/>

        </Grid>
    );
};

export default LeftMenus;
