import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import {getContainerHeight} from '../../Others/GlobalMethods'
import TopLeftInfos from "./Right/TopInfoAndButtons";
import TopRightButtons from "./Right/TopRightButtons";
import {Route, Switch} from "react-router-dom";
import AboutRoute from "./Right/Routes/AboutRoute";
import SkillsRoute from "./Right/Routes/SkillsRoute";
import ProjectsRoute from "./Right/Routes/ProjectsRoute";
import ContactRoute from "./Right/Routes/ContactRoute";

const styles = {
    upperPart: {
        padding: 16,
    },
    content: {
        flexGrow: 1,
        paddingLeft: 8,
        paddingBottom: 8
    }
}

const RightPart = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid style={{...getContainerHeight(state.belowSm), ...styles.parent}} xs item>

            {/*     TOP PART        */}
            <Grid style={styles.upperPart} container direction='row' justify='space-between'>
                <TopLeftInfos/>
                <TopRightButtons/>
            </Grid>

            {/*     Info part       */}
            <Grid style={styles.content}>
                <Switch>
                    <Route exact path="/about" component={AboutRoute}/>
                    <Route exact path="/skills" component={SkillsRoute}/>
                    <Route exact path="/projects" component={ProjectsRoute}/>
                    <Route exact path="/contact" component={ContactRoute}/>
                </Switch>
            </Grid>
        </Grid>
    );
};

export default RightPart;
