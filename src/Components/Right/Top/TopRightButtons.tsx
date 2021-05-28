import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import SvgHelper from '../../../Helpers/SvgHelper';
import { Icons } from '../../../Others/Icons';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        iconButton: {
            padding: 8
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const TopRightButtons: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container direction='row' justify='flex-end' item xs>
        <IconButton size='small' target="_blank" href='https://github.com/p32929/p32929.github.io/'>
            <SvgHelper
                styles={{ padding: 8 }}
                path={Icons.fork}
                size={20} />
        </IconButton>

        <IconButton size='small'>
            <SvgHelper
                styles={{ padding: 8 }}
                path={Icons.circle}
                size={20} />
        </IconButton>
    </Grid>

}

export default TopRightButtons;