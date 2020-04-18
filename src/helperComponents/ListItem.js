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
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SvgHelper from "./SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import demoImage from '../assets/avatar.png'
import {connect} from "react-redux";

const styles = {
    parent: {
        margin: 2,
    },
    avatar: {
        margin: 16,
    },
    textContainer: {
        marginTop: 16,
        marginBottom: 16,
        marginRight: 16,
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        color: "#212121",
        lineHeight: 1.25
    },
    desc: {
        fontSize: 14,
        color: "#757575",
        lineHeight: 1.25,
        overflow: 'hidden',
    }
}

const ListItem = (props) => {
    const {item, height = 76} = props;
    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
            <Paper elevation={4} style={{height: height, ...styles.parent}}>
                <Grid container wrap="nowrap" direction='row'>
                    <Grid item>
                        <Avatar variant='square' style={styles.avatar}
                                src={item.logo || demoImage}></Avatar>
                    </Grid>
                    <Grid item xs style={styles.textContainer} container justify='center' direction='column'>
                        <Typography style={styles.title}>{item.title}</Typography>
                        <Typography style={styles.desc}>{item.desc || item.link}</Typography>
                    </Grid>
                    {
                        item.link.includes('http') && <IconButton href={item.link} size='small'>
                            <SvgHelper
                                path='M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z'
                                styles={{padding: 8}}
                                size={36}/>
                        </IconButton>
                    }
                </Grid>
            </Paper>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(ListItem);
