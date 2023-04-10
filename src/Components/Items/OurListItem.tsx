import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, IconButton, Paper, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { ListItemInterface } from '../../Others/Interfaces';
import SvgHelper from '../../Helpers/SvgHelper';
import { OurIcons } from '../../Others/OurIcons';

interface Props {
    item: ListItemInterface
}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            padding: 2,
        },
        textContainer: {
            paddingTop: 16,
            paddingBottom: 16,
            overflow: 'hidden',
            alignSelf: 'center'
        },
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

const getLinkIcon = (url: string | undefined) => {
    if (url) {
        if (url.toString().includes('http') || url.toString().includes('skype:')) {
            return <Grid style={{ paddingTop: 16 }}>
                <IconButton
                    onClick={() => {
                        setTimeout(() => {

                        }, 500)
                    }}
                    target="_blank"
                    href={url}
                    size='small'>
                    <SvgHelper
                        path={OurIcons.linkIcon}
                        styles={{ padding: 8 }}
                        size={22} />
                </IconButton>
            </Grid>
        }
    }
}

interface LinkIconProps {
    url: string | undefined;
}

const LinkIcon: React.FC<LinkIconProps> = (props) => {
    const { showHelperDialog } = useActions()
    const { url } = props

    if (url) {
        if (url.toString().includes('http') || url.toString().includes('skype:')) {
            return <Grid style={{ paddingTop: 16 }}>
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation()
                        // setTimeout(() => {
                        //     showHelperDialog(false)
                        // }, 500)
                    }}
                    target="_blank"
                    href={url}
                    size='small'>
                    <SvgHelper
                        path={OurIcons.linkIcon}
                        styles={{ padding: 8 }}
                        size={22} />
                </IconButton>
            </Grid>
        }
    }

    return <></>
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const OurListItem: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()

    const classes = useStyles();
    const { item } = props
    const { logo, title, desc, link } = item

    return <Grid container item xs={12} sm={12} md={6} lg={6} xl={4} className={classes.root}>
        <Paper elevation={4} style={{ width: '100%' }}>
            <Grid container direction='row'>
                <Avatar variant='square' className={classes.avatar} src={logo} />

                <Grid container direction='column' item xs className={classes.textContainer}>
                    <Typography variant='body1' className={classes.title}>{title}</Typography>
                    {
                        (desc || link) &&
                        <Typography variant='body2' className={classes.desc}>{desc || link}</Typography>
                    }
                </Grid>

                <LinkIcon url={link} />

            </Grid>
        </Paper>
    </Grid>

}

export default OurListItem;