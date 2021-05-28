import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import SvgHelper from '../../Helpers/SvgHelper';
import { Icons } from '../../Others/Icons';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const ListTitle: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container direction='row' justify='flex-start' alignItems='center' alignContent='center' >
        
    </Grid>

}

export default ListTitle;