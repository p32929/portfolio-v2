import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";

const AboutRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid>
            AboutRoute
        </Grid>
    );
};

export default AboutRoute;
