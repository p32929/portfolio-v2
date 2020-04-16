import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";
import {frameworks, languages, others} from "../vars/SkillsItems";
import TypographyWithIcon from "../helperComponents/TypographyWithIcon";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    listGridInner: {}
}

const Skills = () => {
    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            <TypographyWithIcon>Programming/Markup Languages</TypographyWithIcon>
            <Grid style={{marginBottom: 16}} container direction='row'>
                {
                    languages.map(item => <ListItem item={item}/>)
                }
            </Grid>

            <TypographyWithIcon>Libraries/Frameworks</TypographyWithIcon>
            <Grid style={{marginBottom: 16}} container direction='row'>
                {
                    frameworks.map(item => <ListItem item={item}/>)
                }
            </Grid>

            <TypographyWithIcon>Others</TypographyWithIcon>
            <Grid style={{marginBottom: 16}} container direction='row'>
                {
                    others.map(item => <ListItem item={item}/>)
                }
            </Grid>
        </Grid>
    );
};

export default Skills;