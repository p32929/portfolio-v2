import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";
import {projects} from '../../../../Others/GlobalVariables'
import {getTextAndList} from "../../../../Others/GlobalMethods";

const ProjectsRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item direction='row'>
            {
                projects.map((item) => {
                    return getTextAndList(item, 96);
                })
            }
        </Grid>
    );
};

export default ProjectsRoute;
