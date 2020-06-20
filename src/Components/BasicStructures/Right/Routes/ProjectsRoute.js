import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";
import {getTextAndList} from "../../../../Others/GlobalMethods";
import {projects} from "../../../../Others/GlobalVariables";

const styles = {
    listGridParent: {
        height: '100%',
    }
}

const ProjectsRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            {
                projects.map((item) => {
                    return getTextAndList(item);
                })
            }
        </Grid>
    );
};

export default ProjectsRoute;
