import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import cartoonAvatar from './../assets/avatar.png'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SvgHelper from "./SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const leftRightMargin = 48;
const topBottomMargin = 36;

const styles = {
    avatar: {
        height: 125,
        width: 125,
        marginTop: topBottomMargin,
        marginLeft: leftRightMargin,
        marginRight: leftRightMargin,
    },
    divider: {
        height: 1,
        margin: 16,
        width: 90,
        alignSelf: 'center'
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
    }
}

const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Blog"
]

const currentRoute = 2;

const LeftPart = () => {
    return (
        <Grid container item xs={3}>
            <Paper component='item' elevation={12}>
                <Grid style={{height: '100%'}} container direction="column" justify="space-between" alignItems="center">

                    <Avatar style={styles.avatar} src={cartoonAvatar}></Avatar>

                    <Typography style={{fontSize: 16, marginTop: 8, marginBottom: -8, color: "#757575"}}>FAYAZ BIN
                        SALAM</Typography>

                    <Divider orientation="horizontal" style={styles.divider} flexItem/>

                    <Grid container item direction='column' justify='center' alignContent='stretch'>
                        {
                            navItems.map((item, index) => {
                                return <Button style={
                                    index == currentRoute ? styles.selectedRoute : styles.notSelectedRoute
                                } size='small'>{item}</Button>
                            })
                        }
                    </Grid>

                    <Divider orientation="horizontal" style={styles.divider} flexItem/>

                    <Grid container direction='row' justify='center' style={{padding: 12}}>
                        {
                            navItems.map((i) => {
                                return <IconButton size='small'>
                                    <SvgHelper
                                        path='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
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