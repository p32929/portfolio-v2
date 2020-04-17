import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../helperComponents/ListItem";
import {socialLinks} from "../vars/ContactItems";
import TypographyWithIcon from "../helperComponents/TypographyWithIcon";
import {connect} from "react-redux";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    listGridInner: {}
}

const Contact = () => {
    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>

            <TypographyWithIcon>Contact me</TypographyWithIcon>
            <Grid style={{marginBottom: 16}} container direction='row'>
                {
                    socialLinks.map(item => <ListItem  item={item}/>)
                }
            </Grid>

        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(Contact);