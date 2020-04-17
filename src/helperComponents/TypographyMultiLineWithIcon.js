import React from 'react';
import SvgHelper from "./SvgHelper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {primaryColor} from '../vars/MainItems'
import {connect} from "react-redux";

const TypographyMultiLineWithIcon = (props) => {
    return (
        <Grid item xs style={{padding: 8}} container direction='row' alignItems='flex-start' alignContent='center'>
            <SvgHelper
                size={18}
                color={primaryColor}
                path='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/>

            <Grid style={{
                marginLeft: 8,
                marginRight: 8
            }} container item xs direction='column' justify='center'>

                <Typography style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: "#212121"
                }}>{props.children}</Typography>

                <Typography style={{
                    fontSize: 14,
                    color: "#757575",
                    marginTop: 4,
                    lineHeight: 1.25,
                    paddingRight: 48,
                }}>{props.desc}</Typography>

            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(TypographyMultiLineWithIcon);
