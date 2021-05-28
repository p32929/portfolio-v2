import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Hidden, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import SvgHelper from '../../../Helpers/SvgHelper';
import { Icons } from '../../../Others/Icons';
// import { useLocation } from "react-router-dom";

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            padding: 16
        },
        divider: {
            height: 1,
            marginTop: 8,
            [theme.breakpoints.down('sm')]: {
                width: 160
            },
            [theme.breakpoints.up('md')]: {
                width: 200
            },
        },
        currentRoute: {
            fontSize: 14,
            fontWeight: 600,
            cursor: 'none',
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const RouteLocation: React.FC<Props> = (props) => {
    const { showLeftPart } = useActions()
    // let location = useLocation();
    const { primaryColor } = useAppState()

    const classes = useStyles();

    return <Grid item xs direction='column' container justify='center'>
        <Grid container item xs direction='row'>
            <Hidden mdUp>
                <IconButton size='small' onClick={() => {
                    showLeftPart(true)
                }}>
                    <SvgHelper path={Icons.menu} styles={{ padding: 8 }} size={20} />
                </IconButton>
            </Hidden>

            <Button variant='text' disabled className={classes.currentRoute}>
                ABOUT
            </Button>
        </Grid>
        <Divider style={{
            backgroundColor: primaryColor
        }} className={classes.divider} orientation="horizontal" flexItem />
    </Grid>

}

export default RouteLocation;