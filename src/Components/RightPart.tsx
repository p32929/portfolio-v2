import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';
import RouteLocation from './Right/Top/RouteLocation';
import TopRightButtons from './Right/Top/TopRightButtons';
import WorksRoute from './Right/Routes/WorksRoute';
import ContactRoute from './Right/Routes/ContactRoute';
import SkillsRoute from './Right/Routes/SkillsRoute';
import AboutRoute from './Right/Routes/AboutRoute';
import { GlobalVars } from '../Others/GlobalVars';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Constants } from '../Others/Constants';

interface Props {

}

const getThemeObj = (theme: Theme) => {
  return {
    root: {
      padding: 16,
    },
    content: {
      paddingRight: 8,
      maxHeight: '100vh',
      maxWidth: '100%',
    }
  }
}

const routes = [
  AboutRoute,
  SkillsRoute,
  WorksRoute,
  ContactRoute,
]

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const RightPart: React.FC<Props> = (props) => {
  const { } = useActions()
  const { isLeftShowing } = useAppState()
  const classes = useStyles();
  const [contentHeight, setContentHeight] = useState(0)

  const theme = useTheme()
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'))
  let location = useLocation();

  useEffect(() => {
    const rc = document.getElementById('container')
    const rt = document.getElementById('right-top')
    const rb = document.getElementById('right-bottom')

    if (rc && rt) {
      const height = rc?.offsetHeight - rt?.offsetHeight
      console.log("Height: " + height);

      setContentHeight(height)
    }
  }, [isLeftShowing, belowSm])

  useEffect(() => {
    document?.getElementById('right-bottom')?.scroll(0, 0)
  }, [location])

  return <Grid id='right-container' container xs item direction='row' alignContent='flex-start'  >
    <Grid id='right-top' container direction='row' className={classes.root} justifyContent='space-between' alignItems='flex-start' alignContent='flex-start'>
      <RouteLocation />
      <TopRightButtons />
    </Grid>
    <Grid id='right-bottom' style={{ height: contentHeight, maxHeight: contentHeight, overflowY: 'scroll', overflowX: 'hidden'}} item xs={12} container className={classes.content} >
      <Switch>
        {
          Constants.routes.map((item, index) => {
            return <Route key={index} exact path={`/${item.toLowerCase()}`} component={routes[index]} />
          })
        }
      </Switch>
    </Grid>
  </Grid>
}

export default RightPart;