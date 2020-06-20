import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import {getContainerHeight} from '../../Others/GlobalMethods'
import TopLeftInfos from "./Right/TopInfoAndButtons";
import TopRightButtons from "./Right/TopRightButtons";

const styles = {
    upperPart: {
        padding: 16,
    },
}

const RightPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={getContainerHeight(state.belowSm)} container xs item direction='row'
              alignContent='flex-start'>

            {/*     TOP PART        */}
            <Grid style={styles.upperPart} container direction='row' justify='space-between'>
                <TopLeftInfos/>
                <TopRightButtons/>
            </Grid>
        </Grid>
    );
};

export default RightPart;
