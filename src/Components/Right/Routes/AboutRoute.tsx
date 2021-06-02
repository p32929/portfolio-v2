import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Grid, Theme, Typography} from "@material-ui/core";
import {useActions, useAppState} from '../../../Overmind/OvermindHelper';
import {LocalImages} from '../../../Others/Images';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListTitle from '../../Items/ListTitle';
import {GlobalVars} from '../../../Others/GlobalVars';

interface Props {

}

const aboveSmAvatarSize = {height: '95%'}
const belowSmAvatarSize = {height: '75%'}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            padding: 8
        },
        text: {
            paddingLeft: 8,
            paddingBottom: 8,
            lineHeight: 1.3,
            fontWeight: 400,
            [theme.breakpoints.up('xl')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
            },
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const AboutRoute: React.FC<Props> = (props) => {
    const {} = useActions()
    const {} = useAppState()

    const classes = useStyles();

    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    return <Grid className={classes.root} container item xs={12} direction='column' justify='flex-end'
                 alignItems='center' alignContent='center'>
        <Grid style={{height: 0, padding: 4}} id='avatarImageGrid' item xs container justify='center'
              alignItems='center' alignContent='center'>
            <img style={belowSm ? belowSmAvatarSize : aboveSmAvatarSize}
                 src={GlobalVars.myRightAvatarImage ?? LocalImages.avatar_with_laptop}/>
        </Grid>

        <Grid item container direction='column'>
            <ListTitle title="About me" fontStyle={{fontSize: 20, fontWeight: 'bold', color: "#212121"}}/>
            <Typography className={classes.text}>
                {GlobalVars.myDetails}
            </Typography>
        </Grid>

    </Grid>

}

export default AboutRoute;