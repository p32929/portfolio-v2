import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import {getContainerHeight} from '../../Others/GlobalMethods'

const RightPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContainerHeight(state.belowSm), backgroundColor: 'green'}} container xs item direction='row'
              alignContent='flex-start'>

        </Grid>
    );
};

export default RightPart;
