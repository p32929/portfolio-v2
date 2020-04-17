import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SvgHelper from "./SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import demoImage from '../assets/avatar.png'
import {connect} from "react-redux";

const styles = {
    parent: {
        margin: 2
    },
    avatar: {
        margin: 16,
    },
    textContainer: {
        marginTop: 16,
        marginBottom: 16,
        marginRight: 16
    },
    title: {
        fontSize: 16,
        color: "#212121"
    },
    desc: {
        fontSize: 14,
        color: "#757575"
    }
}

const ListItem = (props) => {
    const {item, perLine} = props;
    return (
        <Grid item xs={perLine ? 12 / perLine : 4}>
            <Paper elevation={4} style={styles.parent}>
                <Grid container wrap="nowrap" direction='row'>
                    <Grid item>
                        <Avatar variant='square' style={styles.avatar}
                                src={item.logo || demoImage}></Avatar>
                    </Grid>
                    <Grid item xs style={styles.textContainer} container justify='center' direction='column'>
                        <Typography style={styles.title}>{item.title}</Typography>
                        {
                            item.desc && <Typography style={styles.desc}>{item.desc}</Typography>
                        }
                    </Grid>
                    {
                        item.link && <IconButton href={item.link} size='small'>
                            <SvgHelper
                                path='M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z'
                                styles={{padding: 8}}
                                size={36}/>
                        </IconButton>
                    }
                </Grid>
            </Paper>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(ListItem);
