import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import SvgHelper from "./SvgHelper";
import Typography from "@material-ui/core/Typography";

const TypographyWithIcon = (props) => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{padding: 8}} container direction='row' justify='flex-start' alignItems='center'
              alignContent='center'>
            <SvgHelper
                size={18}
                color={state.primaryColor}
                path='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/>

            <Typography style={{
                marginLeft: 8,
                marginRight: 8,
                fontSize: 12,
                fontWeight: 'bold',
                color: "#757575"
            }}>{props.children}</Typography>
        </Grid>
    );
};

export default TypographyWithIcon;
