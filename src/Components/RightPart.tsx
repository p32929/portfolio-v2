import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Grid } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';
import RouteLocation from './Right/Top/RouteLocation';
import TopRightButtons from './Right/Top/TopRightButtons';

interface Props {

}

const getThemeObj = (theme: Theme) => {
  return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const RightPart: React.FC<Props> = (props) => {
  const { } = useActions()
  const { } = useAppState()

  const classes = useStyles();

  return <Grid container xs item direction='row' alignContent='flex-start'>
    <Grid container direction='row' justify='space-between'>
      <RouteLocation />
      <TopRightButtons />
    </Grid>
  </Grid>
}

export default RightPart;