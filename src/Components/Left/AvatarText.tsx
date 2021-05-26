import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, Avatar } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const AvatarText: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid item xs sm md lg xl container direction="column" justify="center" alignItems="center">
        HELlo
    </Grid>
}

export default AvatarText;