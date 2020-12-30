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
import {navContactIcons} from "../../Utils/MainItems";
import SvgHelper from "../Helpers/SvgHelper";
import IconButton from "@material-ui/core/IconButton";

const SmallBottomLinks = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{paddingBottom: 8, width: '100%'}} container direction='row' justify='center'
              alignItems='center'
              alignContent='center'>
            {
                navContactIcons.map((item, index) => {
                    return <IconButton key={index} size='small' target="_blank" href={item.link}>
                        <SvgHelper
                            path={item.svgPath}
                            size={18} styles={{margin: 3}}/>
                    </IconButton>
                })
            }
        </Grid>
    );
};

export default SmallBottomLinks;
