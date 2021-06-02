import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { GlobalVars } from '../../Others/GlobalVars';
import SvgHelper from '../../Helpers/SvgHelper';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        root: { paddingBottom: 8, width: '100%' },
        iconButton: { margin: 3 }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const BottomNavigationLinks: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container className={classes.root} direction='row' justify='center' alignItems='center' alignContent='center'>
        {
            GlobalVars.bottomLinks.map((item, index) => {
                return <IconButton className={classes.iconButton} key={index} size='small' target="_blank" href={item.link}>
                    <SvgHelper
                        path={item.svgPath}
                        size={18} />
                </IconButton>
            })
        }
    </Grid>
}

export default BottomNavigationLinks;