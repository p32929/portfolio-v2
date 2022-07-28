import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Hidden, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { GlobalVars } from '../../Others/GlobalVars';
import { NavLink } from "react-router-dom";
import SvgHelper from '../../Helpers/SvgHelper';
import { OurIcons } from '../../Others/OurIcons';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        link: {
            marginLeft: 8,
            marginRight: 8,
            textDecoration: 'none'
        },
        divider: {
            height: 1,
            margin: 16,
            width: 90,
            alignSelf: 'center'
        },
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const NavigationLinks: React.FC<Props> = (props) => {
    const { showLeftPart } = useActions()
    const { primaryColor } = useAppState()
    const classes = useStyles();

    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    return <Grid container item xs direction='column' justify='center' alignContent='stretch'>

        {/* @ts-ignore */}
        <Hidden mdUp>
            <IconButton size='small' onClick={() => {
                showLeftPart(false)
            }}>
                <SvgHelper size={18} path={OurIcons.close} />
            </IconButton>
        </Hidden>

        <Divider style={{ backgroundColor: primaryColor }} className={classes.divider} orientation="horizontal" flexItem />

        {
            GlobalVars.routes.map((item, index) => {
                return <Button
                    activeStyle={{ backgroundColor: primaryColor, color: "white" }}
                    className={classes.link}
                    key={index}
                    onClick={() => {
                        if (belowSm) {
                            showLeftPart(false)
                        }
                    }}
                    size='small'
                    component={NavLink}
                    to={item.toLowerCase()}
                >{item}</Button>

            })
        }

        <Divider style={{ backgroundColor: primaryColor }} className={classes.divider} orientation="horizontal" flexItem />

    </Grid>
}

export default NavigationLinks;