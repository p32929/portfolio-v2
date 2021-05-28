import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, IconButton, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import SvgHelper from '../../Helpers/SvgHelper';
import { OurIcons } from '../../Others/OurIcons';

interface Props {
    title: string,
}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            paddingLeft: 8
        },
        text: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 12,
            fontWeight: 600,
            color: "#757575"
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const ListTitle: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()
    const { title } = props
    const classes = useStyles();

    return <Grid className={classes.root} container direction='row' justify='flex-start' alignItems='center' alignContent='center' >
        <SvgHelper size={18} path={OurIcons.star} />
        <Typography variant='body2' className={classes.text}>{title}</Typography>
    </Grid>

}

export default ListTitle;