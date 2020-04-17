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
import {myImageLink, myName, myOccupation, navContactIcons, navItems, primaryColor} from '../vars/MainItems.js'
import {NavLink} from "react-router-dom";

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
        alignSelf: 'center',
        backgroundColor: primaryColor
    },
    selectedRoute: {
        backgroundColor: primaryColor,
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

const LeftPart = () => {
    return (
        <Grid container item xs={11} sm={11} md={3} lg={2} xl={2}>
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
                        <Divider orientation="horizontal" style={styles.divider} flexItem/>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <Button activeStyle={styles.selectedRoute} component={NavLink}
                                            to={item.toLowerCase()} size='small'>{item}</Button>
                                )
                            })
                        }
                        <Divider orientation="horizontal" style={styles.divider} flexItem/>
                    </Grid>

                    <Grid style={{marginBottom: 8, width: '100%'}} container direction='row' justify='center' alignItems='center'
                          alignContent='center'>
                        {
                            navContactIcons.map((item) => {
                                return <IconButton size='small' href={item.link}>
                                    <SvgHelper
                                        path={item.svgPath}
                                        color={primaryColor}
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

export default LeftPart;