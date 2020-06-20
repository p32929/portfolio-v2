import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import SvgHelper from "./SvgHelper";
import Typography from "@material-ui/core/Typography";

const TypographyMultilinedWithIcon = (props) => {
    const {state, actions} = useOvermind()

    return (
        <Grid item xs style={{padding: 8}} container direction='row'>

            <Grid container item xs direction='row' justify='flex-start' alignItems='center'>

                <SvgHelper
                    styles={{
                        marginLeft: 4,
                        marginRight: 8,
                    }}
                    size={16}
                    color={state.primaryColor}
                    path='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'/>

                <Typography variant='h6' style={{
                    fontWeight: 'bold',
                    color: "#212121",
                    fontSize: 20
                }}>{props.children}</Typography>

            </Grid>

            <Typography variant='body2' style={{
                color: "#212121",
                lineHeight: 1.15,
                marginLeft: 8,
                paddingRight: 8,
                fontSize: 16,
            }}>{props.desc}</Typography>

        </Grid>
    );
};

export default TypographyMultilinedWithIcon;
