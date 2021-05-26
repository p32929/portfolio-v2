import React from 'react';
import {Button, Grid, Theme, Typography} from "@material-ui/core";
import {useActions, useAppState} from '../Overmind/OvermindHelper'
import {makeStyles} from '@material-ui/core/styles';

interface Props {
    name?: String
}

const getThemeObj = (theme: Theme) => {
    return {
        button: {marginTop: 8},
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const Counter: React.FC<Props> = (props) => {
    const {increaseCounter} = useActions()
    const classes = useStyles();

    const {counter} = useAppState()

    return <Grid style={{height: 200}} container direction='column' justify='center' alignContent='center'
                 alignItems='center'>
        <Typography>{props.name}</Typography>
        <Typography>Counter: {counter}</Typography>
        <Button className={classes.button} variant='contained' color='primary' onClick={() => {
            increaseCounter(1)
        }}>+</Button>
        <Button className={classes.button} variant='contained' color='primary' onClick={() => {
            increaseCounter(-1)
        }}>-</Button>

    </Grid>
}

export default Counter;
