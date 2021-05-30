import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Theme, Typography} from "@material-ui/core";
import {useActions, useAppState} from '../../Overmind/OvermindHelper';
import SvgHelper from '../../Helpers/SvgHelper';
import {OurIcons} from '../../Others/OurIcons';

interface Props {
    title: string,
    fontStyle?: any
}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            marginLeft: 8,
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
    const {} = useActions()
    const {} = useAppState()
    const {title, fontStyle} = props
    const classes = useStyles();

    return <Grid container direction='row' alignItems='center' alignContent='center' className={classes.root}>
        <SvgHelper size={20} path={OurIcons.star}/>
        <Typography variant='body2' style={fontStyle} className={classes.text}>{title}</Typography>
    </Grid>

}

export default ListTitle;