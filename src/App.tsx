import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, Paper } from "@material-ui/core";
import { useActions, useAppState } from './Overmind/OvermindHelper';

interface Props {

}

const getHeightWidthWeb = () => {
  console.debug("Web");

  return {
    width: `calc(100% - 316px)`,
    height: `calc(100% - 168px)`
  }
}

const getHeightWidthMobile = () => {
  console.debug("Mobile");

  return {
    width: `calc(100% - 48px)`,
    height: `calc(100% - 48px)`
  }
}

const getThemeObj = (theme: Theme) => {
  return {
    root: {
      height: '100vh',
      maxHeight: '100vh',
    },
    paper: {
      [theme.breakpoints.down('sm')]: getHeightWidthMobile(),
      [theme.breakpoints.up('md')]: getHeightWidthWeb(),
    }
  }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const App: React.FC<Props> = (props) => {
  const { } = useActions()
  const { } = useAppState()

  const classes = useStyles();

  return <Grid container className={classes.root} justify='center' alignContent='center' alignItems='center'
    direction='column'
  >
    <Paper className={classes.paper} elevation={16}>
      HELLO
    </Paper>
  </Grid>
}

export default App;