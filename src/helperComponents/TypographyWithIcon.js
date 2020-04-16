import React from 'react';
import SvgHelper from "./SvgHelper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {primaryColor} from '../vars/MainItems'

const TypographyWithIcon = (props) => {
    return (
        <Grid container direction='row' alignItems='center'>
            <SvgHelper
                color={primaryColor}
                path='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/>
            <Typography style={{
                marginTop: 8,
                marginBottom: 8,
                marginLeft: 16,
                marginRight: 16,
                fontSize: 14,
                fontWeight: 'bold',
                color: "#757575"
            }}>{props.children}</Typography>
        </Grid>
    );
};

export default TypographyWithIcon;