import Grid from "@material-ui/core/Grid";
import React from "react";
import TypographyWithIcon from "../Components/Helpers/TypographyWithIcon";
import OurListItem from "../Components/Items/OurListItem";

export function getContainerHeight(matches) {
    var topBottomMargins;
    var leftRightMargins;

    if (matches) {
        topBottomMargins = 24
        leftRightMargins = 24
    } else {
        topBottomMargins = 84;
        leftRightMargins = 158;
    }

    return {
        maxHeight: window.innerHeight - topBottomMargins * 2,
        maxWidth: window.innerWidth - leftRightMargins * 2,
        height: window.innerHeight - topBottomMargins * 2,
        width: window.innerWidth - leftRightMargins * 2
    }
}

export const getTextAndList = (item, height = 76) => {
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
