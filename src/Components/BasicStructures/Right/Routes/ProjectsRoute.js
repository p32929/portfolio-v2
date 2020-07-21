import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";
import {getTextAndListGrid} from "../../../../Others/GlobalMethods";
import {projects} from "../../../../Others/GlobalVariables";

const ProjectsRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item direction='row'>
            {
                projects.map((item) => {
                    return getTextAndListGrid(item, 96);
                })
            }
        </Grid>
    );
};

export default ProjectsRoute;
