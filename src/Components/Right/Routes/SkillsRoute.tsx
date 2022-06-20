import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import { GlobalVars } from '../../../Others/GlobalVars';
import ListItemWithIcon from '../../Items/ListItemWithIcon';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const SkillsRoute: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container xs={12} item direction='column'>
        {
            GlobalVars.skills.map((item, index) => {
                return <ListItemWithIcon item={item} />
            })
        }
    </Grid>

}

export default SkillsRoute;