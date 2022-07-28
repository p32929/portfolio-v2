import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Hidden, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import SvgHelper from '../../../Helpers/SvgHelper';
import { OurIcons } from '../../../Others/OurIcons';
import { useLocation } from "react-router-dom";

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
    let location = useLocation();
    const { primaryColor } = useAppState()

    const classes = useStyles();

    return <Grid item xs={8} direction='column' container justify='center'>
        <Grid item xs>
            {/* @ts-ignore */}
            <Hidden mdUp>
                <IconButton size='small' onClick={() => {
                    showLeftPart(true)
                }}>
                    <div className='bounce'>
                        <SvgHelper path={OurIcons.menu} styles={{ padding: 8 }} size={20} />
                    </div>
                </IconButton>
            </Hidden>
            <Button variant='text' disabled className={classes.currentRoute}>
                {location.pathname.replace("/", "")}
            </Button>
        </Grid>

        <Grid item xs>
            <Divider style={{
                backgroundColor: primaryColor
            }} className={classes.divider} orientation="horizontal" flexItem />
        </Grid>
    </Grid>

}

export default RouteLocation;