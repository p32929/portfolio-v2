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
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {myImageLink, myName, myOccupation} from '../../Utils/MainItems'
import avatarImage from '../../Assets/avatar.png'

const styles = {
    avatar: {
        height: 125,
        width: 125,
    },
    title: {
        fontSize: 14,
        color: "#212121",
        marginTop: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: "#212121",
        fontWeight: 'bold'
    },
}

const AvatarText = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid item xs sm md lg xl container direction="column" justify="center"
              alignItems="center">
            <Avatar style={styles.avatar} src={myImageLink ? myImageLink : avatarImage}></Avatar>

            <Typography style={styles.title}>{myName.toUpperCase()}</Typography>
            <Typography style={styles.subtitle}>{myOccupation}</Typography>
        </Grid>
    );
};

export default AvatarText;
