import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { GlobalVars } from '../../Others/GlobalVars';
import { NavLink } from "react-router-dom";

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
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container item xs sm md lg xl direction='column' justify='center' alignContent='stretch'>
        <Divider className={classes.divider} orientation="horizontal" flexItem />

        {
            GlobalVars.navLinks.map((item, index) => {
                return <Button
                    className={classes.link}
                    key={index}
                    onClick={() => {

                    }}
                    size='small'
                // component={NavLink}
                // to={item.toLowerCase()}
                >{item}</Button>

            })
        }

        <Divider className={classes.divider} orientation="horizontal" flexItem />

    </Grid>
}

export default NavigationLinks;