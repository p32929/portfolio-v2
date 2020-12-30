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
import AvatarText from "../SubComponents/Helpers/AvatarText";
import TypographyMultilinedWithIcon from "../SubComponents/ListItems/TypographyMultilinedWithIcon";
import {myDetails} from "../Utils/MainItems";
import avatarImage from "../Assets/avatar2.png";

const aboveSmAvatarSize = {height: '100%'}
const belowSmAvatarSize = {height: 175}

const AboutRoute = () => {
    const {state, actions} = useOvermind()
    const [avatarGridHeight, setAvatarGridHeight] = useState({})
    const [aboutGridSizeState, setAboutGridSizeState] = useState()
    useEffect(() => {
        var aboutGridSize = document.getElementById('aboutGrid').offsetHeight
        var aboutMeTextGridSize = document.getElementById('aboutMeTextGrid').offsetHeight
        if (!state.belowSm) {
            setAvatarGridHeight(aboutGridSize - aboutMeTextGridSize - 40)
        }
        setAboutGridSizeState(aboutGridSize)
    }, [aboutGridSizeState])

    return (
        <Grid id='aboutGrid' container direction='column' justify='flex-end' alignItems='center' alignContent='center'>
            <Grid style={{height: avatarGridHeight}} id='avatarImageGrid' item xs container justify='center'
                  alignItems='center' alignContent='center'>
                <img style={state.belowSm ? belowSmAvatarSize : aboveSmAvatarSize} src={avatarImage}/>
            </Grid>

            <Grid id='aboutMeTextGrid' item style={{marginBottom: 8, overflow: 'auto'}}>
                <TypographyMultilinedWithIcon desc={myDetails}>
                    About me
                </TypographyMultilinedWithIcon>
            </Grid>
        </Grid>
    );
};

export default AboutRoute;
