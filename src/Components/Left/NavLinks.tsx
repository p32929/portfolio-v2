import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { GlobalVars } from '../../Others/GlobalVars';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const NavLinks: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container item xs sm md lg xl direction='column' justify='center' alignContent='stretch'>
        {
            GlobalVars.navLinks.map((item, index) => {
                return <Button
                    key={index}
                    onClick={() => {

                    }}
                    size='small'
                >{item}</Button>

            })
        }
    </Grid>
}

export default NavLinks;