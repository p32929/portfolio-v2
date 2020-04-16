import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = {
    parent: {
        padding: 12,
        margin: 8,
    },
    media: {
        height: 124,
        borderRadius: 6,
    },
    divider: {
        height: 1,
        marginTop: 8
    }
}

const ListItem = (props) => {
    const {
        xs = 3,
        item = {},

    } = props;
    return (
        <Grid item xs={xs}>
            <Paper component={"div"} style={styles.parent}>
                <Grid container justify='center'>
                    <img style={styles.media}
                         src='https://lh3.googleusercontent.com/vvp6Ev33xPerWBBOtIRyAHl7k5c4wQ72hGwG3EU4JC-BTjfvb5DSJDeMABaRg0fy_KI=s180'/>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default ListItem;