import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {giftIcon, linkIcon} from '../../Others/MainItems'
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "../Helpers/SvgHelper";

const styles = {
    parent: {
        margin: 2,
    },
    avatar: {
        margin: 16,
    },
    textContainer: {
        marginTop: 16,
        marginBottom: 16,
        marginRight: 16,
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        color: "#212121",
        lineHeight: 1.25
    },
    desc: {
        fontSize: 14,
        color: "#757575",
        lineHeight: 1.25,
        overflow: 'hidden',
    }
}

function getLinkIcon(url) {
    if (url) {
        if (url.toString().includes('http')) {
            return <IconButton target="_blank" href={url} size='small'>
                <SvgHelper
                    path={linkIcon}
                    styles={{padding: 8}}
                    size={36}/>
            </IconButton>
        }
    }
    return;
}

const OurListItem = (props) => {
    const {state, actions} = useOvermind()
    var {height = 76, item} = props;
    if (state.belowSm) {
        height = 'auto'
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={4} style={{height: height, ...styles.parent}}>
                <Grid container wrap="nowrap" direction='row'>
                    <Grid item>
                        <Avatar variant='square' style={styles.avatar}
                                src={item.logo || giftIcon}></Avatar>
                    </Grid>
                    <Grid item xs style={styles.textContainer} container justify='center' direction='column'>
                        <Typography style={styles.title}>{item.title}</Typography>
                        <Typography style={styles.desc}>{item.desc || item.link}</Typography>
                    </Grid>
                    {
                        getLinkIcon(item.link)
                    }
                </Grid>
            </Paper>
        </Grid>
    );
};

export default OurListItem;
