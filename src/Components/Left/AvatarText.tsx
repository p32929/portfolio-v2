import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, Avatar, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        avatar: {
            height: 125,
            width: 125,
        },
        title: {
            color: "#212121",
            marginTop: 24,
            fontSize: 14,
            fontWeight: 600
        },
        subtitle: {
            fontSize: 12,
            color: "#212121",
            fontWeight: 600
        },
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const AvatarText: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid item xs sm md lg xl container direction="column" justify="center" alignItems="center">
        <Avatar src='/avatar.png' className={classes.avatar} />
        <Typography className={classes.title}>FAYAZ BIN SALAM</Typography>
        <Typography className={classes.subtitle}>CEO at Rich IT</Typography>
    </Grid>
}

export default AvatarText;