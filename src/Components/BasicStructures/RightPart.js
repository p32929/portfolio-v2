import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import TopLeftInfos from "./Right/TopInfoAndButtons";
import TopRightButtons from "./Right/TopRightButtons";
import {Route, Switch} from "react-router-dom";
import {getContainerHeight} from "../../Others/GlobalMethods";
import ProjectsRoute from "./Right/Routes/ProjectsRoute";

const styles = {
    upperPart: {
        padding: 16,
    }
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

            <Switch>
                <Route exact path="/projects" component={ProjectsRoute}/>
            </Switch>

        </Grid>
    );
};

export default RightPart;
