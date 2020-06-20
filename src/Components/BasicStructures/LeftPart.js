import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import {getContainerHeight} from '../../Others/GlobalMethods'

const LeftPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContainerHeight(state.belowSm), backgroundColor: 'red'}} container item xs={11} sm={11}
              md={3} lg={3}
              xl={2}>

        </Grid>
    );
};

export default LeftPart;
