import React from 'react';
import Grid from "@material-ui/core/Grid";
import TypographyMultiLineWithIcon from "../helperComponents/TypographyMultiLineWithIcon";
import {myDetails} from '../vars/MainItems'
import Avatar from "@material-ui/core/Avatar";
import avatarImage from "../assets/avatar2.png";
import {connect} from "react-redux";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        height: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    textBelow: {
        fontSize: 16,
        color: "#212121",
        marginLeft: 16,
        marginRight: 16
    },
    avatar: {
        height: 124,
        width: 124,
    },
}

const About = () => {
    return (
        <Grid style={styles.listGridParent} container xs item direction='column' alignItems='center' justify='space-around'>

            <Grid item>
                <Avatar variant='square' style={styles.avatar}
                        src={avatarImage}></Avatar>
            </Grid>

            <Grid item>
                <TypographyMultiLineWithIcon desc={myDetails}>
                    About me
                </TypographyMultiLineWithIcon>
            </Grid>

        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(About);