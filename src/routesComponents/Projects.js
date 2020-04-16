import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
}

const arr = [
    'a',
    'a',
    'a',

]

const Projects = () => {
    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            {
                arr.map(item => <ListItem/>)
            }
        </Grid>
    );
};

export default Projects;