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
import {useOvermind} from "../../../../Others/OvermindHelper";
import Avatar from "@material-ui/core/Avatar";
import avatarImage from '../../../../Images/avatar2.png'
import TypographyMultilinedWithIcon from "../../../Helpers/TypographyMultilinedWithIcon";
import {myDetails} from "../../../../Others/MainItems";

const styles = {
    avatar: {
        height: 136,
        width: 136,
        margin: 16
    },
}

const AboutRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid container xs item direction='column' alignItems='center'
              justify={state.belowSm ? 'center' : 'flex-end'} alignContent='center'>

            <Grid item>               
                <Avatar variant='square' style={{
                    height: state.bigDevice ? 440 : 160,
                    width: state.bigDevice ? 400 : 136,
                    margin: 16
                }}
                        src={avatarImage}></Avatar>
            </Grid>

            <Grid item style={{marginBottom: 8, overflow: 'auto'}}>
                <TypographyMultilinedWithIcon desc={myDetails}>
                    About me
                </TypographyMultilinedWithIcon>
            </Grid>

        </Grid>
    );
};

export default AboutRoute;
