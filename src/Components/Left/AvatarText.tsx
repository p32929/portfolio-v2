import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Grid, Theme, Typography} from "@material-ui/core";
import {useActions, useAppState} from '../../Overmind/OvermindHelper';
import {GlobalVars} from '../../Others/GlobalVars';
import {LocalImages} from '../../Others/Images';

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
    const {} = useActions()
    const {} = useAppState()

    const classes = useStyles();

    return <Grid item xs container direction="column" justify="center" alignItems="center">
        <Avatar alt={GlobalVars.myName + " - " + GlobalVars.myOccupation}
                src={GlobalVars.myLeftAvatarImage ?? LocalImages.avatar} className={classes.avatar}/>
        <Typography className={classes.title}>{GlobalVars.myName.toUpperCase()}</Typography>
        <Typography className={classes.subtitle}>{GlobalVars.myOccupation}</Typography>
    </Grid>
}

export default AvatarText;