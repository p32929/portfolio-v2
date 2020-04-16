import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import cartoonAvatar from '../assets/avatar.png'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "./SvgHelper";
import {myImageLink, myName, myOccupation, navContactIcons, navItems} from '../vars/mainItems.js'

const styles = {
    avatar: {
        height: 125,
        width: 125,
    },
    title: {
        fontSize: 16,
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
        backgroundColor: '#CDDC39'
    },
    selectedRoute: {
        backgroundColor: "#CDDC39",
        color: "#FFF",
        marginLeft: 8,
        marginRight: 8
    },
    notSelectedRoute: {
        backgroundColor: "#FFF",
        color: "#212121",
        marginLeft: 8,
        marginRight: 8
    },
    paper: {
        width: '100%'
    },
}

const currentRoute = 0;

const LeftPart = () => {
    return (
        <Grid container item xs={2}>
            <Paper style={styles.paper} elevation={12}>
                <Grid style={{height: '100%'}} container direction="column" justify="space-between" alignItems="center">

                    {/*AT*/}
                    <Grid style={styles.avaratAndText} container direction="column" justify="center"
                          alignItems="center">
                        <Avatar style={styles.avatar} src={myImageLink ? myImageLink : cartoonAvatar}></Avatar>

                        <Typography style={styles.title}>{myName.toUpperCase()}</Typography>
                        <Typography style={styles.subtitle}>{myOccupation}</Typography>
                    </Grid>

                    {/*MENUS*/}
                    <Grid container item direction='column' justify='center' alignContent='stretch'>
                        <Divider orientation="horizontal" style={styles.divider} flexItem/>
                        {
                            navItems.map((item, index) => {
                                return <Button style={
                                    index == currentRoute ? styles.selectedRoute : styles.notSelectedRoute
                                } size='small'>{item}</Button>
                            })
                        }
                        <Divider orientation="horizontal" style={styles.divider} flexItem/>
                    </Grid>

                    <Grid container direction='row' justify='center' style={{padding: 12}}>
                        {
                            navContactIcons.map((item) => {
                                return <IconButton size='small' href={item.link}>
                                    <SvgHelper
                                        path={item.svgPath}
                                        size={20} styles={{margin: 3}}/>
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