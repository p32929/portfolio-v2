import React from 'react';
import Grid from "@material-ui/core/Grid";
import TypographyWithIcon from "../helperComponents/TypographyWithIcon";

const styles = {
    listGridParent: {
        maxHeight: '100%',
        height: '100%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    textBelow: {
        fontSize: 16,
        color: "#212121",
        marginLeft: 16,
        marginRight: 16
    },
}

const About = () => {
    return (
        <Grid style={styles.listGridParent} container xs item direction='row' alignItems='flex-start'
              justify='flex-start' alignContent='flex-start'>
            <TypographyWithIcon>About me</TypographyWithIcon>

        </Grid>
    );
};

export default About;