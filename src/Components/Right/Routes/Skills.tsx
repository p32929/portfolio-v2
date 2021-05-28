import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import { GlobalVars } from '../../../Others/GlobalVars';
import OurListItem from '../../Items/OurListItem';
import ListTitle from '../../Items/ListTitle';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const Skills: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid spacing={1} container xs item direction='row'>
        {
            GlobalVars.skills.map((item, index) => {
                return <ListTitle/>
            })
        }
    </Grid>

}

export default Skills;