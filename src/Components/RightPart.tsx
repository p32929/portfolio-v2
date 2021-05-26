import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const RightPart: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container direction='column'>
        RightPart
  </Grid>
}

export default RightPart;