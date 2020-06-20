import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";


const AboutRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid container xs item direction='column' alignItems='center'
              justify='flex-end'>

            <Grid item style={{marginBottom: 16, overflow: 'auto',}}>

            </Grid>

        </Grid>
    );
};

export default AboutRoute;
