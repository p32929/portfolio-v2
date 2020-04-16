import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";
import Typography from "@material-ui/core/Typography";
import {languages} from '../vars/SkillsItems'

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
}

const Skills = () => {
    return (
        <Grid>
            {
                languages.length > 0 && <Grid>
                    <Typography>Languages</Typography>
                    <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
                        {
                            languages.map(item => <ListItem/>)
                        }
                    </Grid>
                </Grid>
            }
        </Grid>
    );
};

export default Skills;