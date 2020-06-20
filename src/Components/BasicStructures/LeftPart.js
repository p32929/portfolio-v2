import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import {getContainerHeight} from '../../Others/GlobalMethods'
import Paper from "@material-ui/core/Paper";
import AvatarText from "./Left/AvatarText";
import LeftMenus from "./Left/LeftMenus";
import SmallBottomLinks from "./Left/SmallBottomLinks";

const LeftPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContainerHeight(state.belowSm), width: '100%'}} container item xs={11} sm={11}
              md={3} lg={3}
              xl={2}>
            <Paper elevation={12} style={{...getContainerHeight(state.belowSm), width: '100%'}}>
                <Grid style={{height: '100%', width: '100%'}} container direction="column"
                      justify="space-between" alignItems="center">

                    <AvatarText/>
                    <LeftMenus/>
                    <SmallBottomLinks/>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default LeftPart;
