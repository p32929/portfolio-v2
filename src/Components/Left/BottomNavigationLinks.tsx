import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const BottomNavigationLinks: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container>

    </Grid>
}

export default BottomNavigationLinks;