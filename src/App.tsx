import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, Paper } from "@material-ui/core";
import { useActions, useAppState } from './Overmind/OvermindHelper';
import LeftPart from './Components/LeftPart';
import { GlobalMethods } from './Others/GlobalMethods';

interface Props {

}

const getThemeObj = (theme: Theme) => {
  return {
    root: {
      height: '100vh',
      maxHeight: '100vh',
    },
    content: {
      height: '100%',
      width: '100%'
    },
    paper: {
      [theme.breakpoints.down('sm')]: GlobalMethods.getHeightWidthMobile(),
      [theme.breakpoints.up('md')]: GlobalMethods.getHeightWidthWeb(),
    }
  }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const App: React.FC<Props> = (props) => {
  const { } = useActions()
  const { primaryColor } = useAppState()

  const classes = useStyles();

  return <Grid container className={classes.root} justify='center' alignContent='center' alignItems='center'
    direction='column' style={{ backgroundColor: primaryColor }}>
    <Paper className={classes.paper} elevation={16}>
      <Grid container direction='row' className={classes.content}>
        <LeftPart />
      </Grid>
    </Paper>
  </Grid>
}

export default App;