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

import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Utils/OvermindHelper";
import Avatar from "@material-ui/core/Avatar";
import avatarImage from '../Assets/avatar2.png'
import TypographyMultilinedWithIcon from "../SubComponents/ListItems/TypographyMultilinedWithIcon";
import {myDetails} from "../Utils/MainItems";

const AboutRoute = () => {
    const {state, actions} = useOvermind()
    const [avatarStyle, setAvatarStyle] = useState({
        height: 0,
        width: 0,
        margin: 16
    })
    useEffect(() => {
        var aboutTexts = document.getElementById("aboutTexts")
        console.log(aboutTexts.offsetHeight)

    }, [window.innerHeight])

    return (
        <Grid container xs item direction='column' alignItems='center'
              justify={state.belowSm ? 'center' : 'flex-end'} alignContent='center'>

            <Grid item>
                <Avatar variant='square' style={avatarStyle}
                        src={avatarImage}/>
            </Grid>

            <Grid id="aboutTexts" item style={{marginBottom: 8, overflow: 'auto'}}>
                <TypographyMultilinedWithIcon desc={myDetails}>
                    About me
                </TypographyMultilinedWithIcon>
            </Grid>

        </Grid>
    );
};

export default AboutRoute;
