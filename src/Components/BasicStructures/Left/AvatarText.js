import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../Others/OvermindHelper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {myImageLink, myName, myOccupation} from '../../../Others/MainItems'
import CartoonAvatar from '../../../Images/avatar.png'

const styles = {
    avatar: {
        height: 125,
        width: 125,
    },
    avaratAndText: {
        marginTop: 24,
        marginBottom: 16
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
}

const AvatarText = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid item xs sm md lg xl style={styles.avaratAndText} container direction="column" justify="center"
              alignItems="center">
            <Avatar style={styles.avatar} src={myImageLink ? myImageLink : CartoonAvatar}></Avatar>

            <Typography style={styles.title}>{myName.toUpperCase()}</Typography>
            <Typography style={styles.subtitle}>{myOccupation}</Typography>
        </Grid>
    );
};

export default AvatarText;
