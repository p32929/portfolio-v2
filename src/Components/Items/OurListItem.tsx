import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Divider, Grid, Paper, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { LocalImages } from '../../Others/Images';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        avatar: {
            margin: 16,
        },
        title: {
            color: "#212121",
            lineHeight: 1.25
        },
        desc: {
            color: "#757575",
            lineHeight: 1.25,
            overflow: 'hidden',
        }
    }
}

// const getLinkIcon = (url: string) => {
//     if (url) {
//         if (url.toString().includes('http') || url.toString().includes('skype:')) {
//             return <IconButton target="_blank"
//                 href={url}
//                 size='small'>
//                 <SvgHelper
//                     path={Icons.linkIcon}
//                     styles={{ padding: 8 }}
//                     size={36} />
//             </IconButton>
//         }
//     }
// }

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const OurListItem: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container item xs={12} sm={12} md={6} lg={6} xl={4} >
        <Paper elevation={4} style={{ width: '100%' }}>
            <Grid container direction='row' alignContent='center' alignItems='center'>
                <Avatar variant='square' className={classes.avatar} />

                <Grid container direction='column' item xs>
                    <Typography variant='body1' className={classes.title}>HELLO WORLD</Typography>
                    <Typography variant='body2' className={classes.desc}>HELLO WORLD</Typography>
                </Grid>

            </Grid>
        </Paper>
    </Grid>

}

export default OurListItem;