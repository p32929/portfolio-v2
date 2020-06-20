import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../Others/OvermindHelper";
import {navContactIcons} from "../../../Others/MainItems";
import SvgHelper from "../../Helpers/SvgHelper";
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
