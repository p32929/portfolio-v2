import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, Paper } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';
import AvatarText from './Left/AvatarText';
import NavigationLinks from './Left/NavigationLinks';
import BottomNavigationLinks from './Left/BottomNavigationLinks';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const LeftPart: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container direction='column' item xs={11} sm={11} md={3} lg={3} xl={2}>
        <Paper elevation={12} className={classes.root}>
            <Grid className={classes.root} container direction="column" justify="space-around" alignContent='center' alignItems="center">
                <AvatarText />
                <NavigationLinks />
                <BottomNavigationLinks />
            </Grid>
        </Paper>
    </Grid>
}

export default LeftPart;