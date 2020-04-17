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

import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Switch, useLocation} from "react-router-dom";
import About from "../routesComponents/About";
import Contact from "../routesComponents/Contact";
import Skills from "../routesComponents/Skills";
import Projects from "../routesComponents/Projects";
import Route from "react-router-dom/es/Route";
import Blogs from "../routesComponents/Blogs";
import SvgHelper from "../helperComponents/SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {BlockPicker} from 'react-color'
import {setDrawerState, setPrimaryColor} from '../vars/ReduxStates'
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getHeightWidthObject} from "../vars/SomeLazyFunctions";

const styles = {
    upperPart: {
        padding: 16,
    },
    divider: {
        height: 1,
        width: 200,
        marginTop: 8,
    },
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const RightPart = (props) => {
    let location = useLocation();
    const [showDialog, setShowDialog] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid style={getHeightWidthObject(matches)} container xs item direction='row' alignContent='flex-start'>
            <Grid style={styles.upperPart} container direction='row' justify='space-between'>
                <Grid item>
                    <Grid>
                        {
                            matches && <IconButton size='small' onClick={() => {
                                setDrawerState(true);
                            }}>
                                <SvgHelper
                                    path='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
                                    styles={{padding: 8}}
                                    size={36}/>
                            </IconButton>
                        }
                        <Button disabled style={styles.currentRoute}>
                            {
                                location.pathname.replace("/", "")
                            }
                        </Button>
                    </Grid>
                    <Divider orientation="horizontal" style={{backgroundColor: props.primaryColor, ...styles.divider}}
                             flexItem/>
                </Grid>

                <Grid>
                    <IconButton size='small' target="_blank" href='https://github.com/p32929/p32929.github.io/'>
                        <SvgHelper
                            path='M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z'
                            styles={{padding: 8}}
                            size={36}/>
                    </IconButton>

                    <IconButton size='small' onClick={() => {
                        setShowDialog(!showDialog)
                    }}>
                        <SvgHelper
                            path='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                            styles={{padding: 8}}
                            size={36}/>
                    </IconButton>
                </Grid>

            </Grid>

            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/blogs" component={Blogs}/>
            </Switch>

            <Dialog open={showDialog} keepMounted={false} aria-labelledby="alert-dialog-slide-title" onClose={() => {
                setShowDialog(false)
            }}>
                <DialogContent>
                    <BlockPicker color={props.primaryColor}
                                 onChange={(color, event) => {
                                     setPrimaryColor(color.hex);
                                     setShowDialog(false);
                                 }}
                                 colors={['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00', '#DD2C00', '']}/>
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(RightPart);
