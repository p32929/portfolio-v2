import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";

const styles = {
    listGridParent: {
        height: '85%',
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
        backgroundColor: 'red'
    }
}

const ProjectsRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            ProjectsRoute
        </Grid>
    );
};

export default ProjectsRoute;
