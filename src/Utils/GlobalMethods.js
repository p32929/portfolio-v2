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

import Grid from "@material-ui/core/Grid";
import React from "react";
import TypographyWithIcon from "../SubComponents/ListItems/TypographyWithIcon";
import OurListItem from "../SubComponents/ListItems/OurListItem";

export function getParentHeightWidth() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (height < 550) {
        height = 550;
    }
    if (width < 350) {
        width = 350;
    }

    return {
        maxHeight: height,
        maxWidth: width,
        height: height,
        width: width
    }
}

export function getContentHeightWidth(matches) {
    var topBottomMargins;
    var leftRightMargins;

    if (matches) {
        topBottomMargins = 24
        leftRightMargins = 24
    } else {
        topBottomMargins = 84;
        leftRightMargins = 158;
    }

    var height = window.innerHeight;
    var width = window.innerWidth;
    if (height < 550) {
        height = 550;
    }
    if (width < 350) {
        width = 350;
    }

    return {
        maxHeight: height - topBottomMargins * 2,
        maxWidth: width - leftRightMargins * 2,
        height: height - topBottomMargins * 2,
        width: width - leftRightMargins * 2
    }
}

export const getTextAndListGrid = (item, height = 76) => {
    if (item) {
        return (
            <Grid style={{width: '100%'}}>
                {
                    item.text && <TypographyWithIcon>{item.text}</TypographyWithIcon>
                }
                {
                    item.arr && item.arr.length > 0 && <Grid style={{marginBottom: 16}} container direction='row'>
                        {
                            item.arr.map(item => <OurListItem height={height} item={item}/>)
                        }
                    </Grid>
                }
            </Grid>
        )
    }
}
