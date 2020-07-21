import Grid from "@material-ui/core/Grid";
import React from "react";
import TypographyWithIcon from "../Components/Helpers/TypographyWithIcon";
import OurListItem from "../Components/Items/OurListItem";

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
