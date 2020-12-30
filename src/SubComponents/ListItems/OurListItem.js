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
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {giftIcon, linkIcon} from '../../Utils/MainItems'
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "../Helpers/SvgHelper";

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

function getLinkIcon(url) {
    if (url) {
        if (url.toString().includes('http') || url.toString().includes('skype:') ) {
            return <IconButton style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}} target="_blank"
                               href={url}
                               size='small'>
                <SvgHelper
                    path={linkIcon}
                    styles={{padding: 8}}
                    size={36}/>
            </IconButton>
        }
    }
    return;
}

const OurListItem = (props) => {
    const {state, actions} = useOvermind()
    var {height = 76, item} = props;
    if (state.belowSm) {
        height = 'auto'
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={4} style={{height: height, ...styles.parent}}>
                <Grid container wrap="nowrap" direction='row' justify='center'>
                    <Grid item>
                        <Avatar variant='square' style={styles.avatar}
                                src={item.logo || giftIcon}></Avatar>
                    </Grid>
                    <Grid item xs style={styles.textContainer} container justify='center' direction='column'>
                        <Typography style={styles.title}>{item.title}</Typography>
                        <Typography style={styles.desc}>{item.desc || item.link}</Typography>
                    </Grid>
                    {
                        getLinkIcon(item.link)
                    }
                </Grid>
            </Paper>
        </Grid>
    );
};

export default OurListItem;
