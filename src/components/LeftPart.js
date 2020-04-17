import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import cartoonAvatar from '../assets/avatar.png'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "../helperComponents/SvgHelper";
import {myImageLink, myName, myOccupation, navContactIcons, navItems} from '../vars/MainItems.js'
import {setDrawerState} from '../vars/ReduxStates'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Hidden} from "@material-ui/core";

const styles = {
    avatar: {
        height: 125,
        width: 125,
    },
    title: {
        fontSize: 14,
        color: "#212121",
        marginTop: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        color: "#212121",
        fontWeight: 'bold'
    },
    avaratAndText: {
        marginTop: 24,
        marginBottom: 16
    },
    divider: {
        height: 1,
        margin: 16,
        width: 90,
        alignSelf: 'center'
    },
    selectedRoute: {
        color: "#FFF",
        marginLeft: 8,
        marginRight: 8,
        textDecoration: 'none'
    },
    notSelectedRoute: {
        backgroundColor: "#FFF",
        color: "#212121",
        marginLeft: 8,
        marginRight: 8,
        textDecoration: 'none'
    },
    paper: {
        width: '100%',
    },
}

const LeftPart = (props) => {
    return (
        <Grid container item xs={11} sm={11} md={3} lg={3} xl={2}>
            <Paper style={styles.paper} elevation={12}>
                <Grid style={{height: '100%'}} container direction="column" justify="space-between" alignItems="center">

                    {/*AT*/}
                    <Grid item xs sm md lg xl style={styles.avaratAndText} container direction="column" justify="center"
                          alignItems="center">
                        <Avatar style={styles.avatar} src={myImageLink ? myImageLink : cartoonAvatar}></Avatar>

                        <Typography style={styles.title}>{myName.toUpperCase()}</Typography>
                        <Typography style={styles.subtitle}>{myOccupation}</Typography>
                    </Grid>

                    {/*MENUS*/}
                    <Grid container item xs sm md lg xl direction='column' justify='center' alignContent='stretch'>

                        <Hidden mdUp>
                            <IconButton size='small' onClick={()=> {
                                setDrawerState(false)
                            }}>
                                <SvgHelper
                                    path='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z'
                                    size={18} styles={{margin: 3}}/>
                            </IconButton>
                        </Hidden>

                        <Divider orientation="horizontal"
                                 style={{backgroundColor: props.primaryColor, ...styles.divider}}
                                 flexItem/>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <Button activeStyle={{backgroundColor: props.primaryColor, ...styles.selectedRoute}}
                                            component={NavLink}
                                            to={item.toLowerCase()} size='small'>{item}</Button>
                                )
                            })
                        }
                        <Divider orientation="horizontal"
                                 style={{backgroundColor: props.primaryColor, ...styles.divider}}
                                 flexItem/>
                    </Grid>

                    <Grid style={{marginBottom: 8, width: '100%'}} container direction='row' justify='center'
                          alignItems='center'
                          alignContent='center'>
                        {
                            navContactIcons.map((item) => {
                                return <IconButton size='small' target="_blank" href={item.link}>
                                    <SvgHelper
                                        path={item.svgPath}
                                        size={18} styles={{margin: 3}}/>
                                </IconButton>
                            })
                        }
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(LeftPart);
