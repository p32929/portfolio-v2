import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Theme, Grid, Paper} from "@material-ui/core";
import {useActions, useAppState} from './Overmind/OvermindHelper';
import LeftPart from './Components/LeftPart';
import {GlobalMethods} from './Others/GlobalMethods';
import RightPart from './Components/RightPart';
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {MemoryRouter, Route, Redirect} from 'react-router-dom';
import ColorPickerDialog from './Components/Dialogs/ColorPickerDialog';

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
    const {showLeftPart} = useActions()
    const {primaryColor, isLeftShowing} = useAppState()
    const classes = useStyles();

    const theme = useTheme()
    const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

    const getLeftPart = () => {
        if (belowSm) {
            if (isLeftShowing) {
                return <LeftPart/>
            }
        } else {
            return <LeftPart/>
        }
    }

    const getRightPart = () => {
        if (belowSm) {
            if (!isLeftShowing) {
                return <RightPart/>
            }
        } else {
            return <RightPart/>
        }
    }

    return <Grid container className={classes.root} justify='center' alignContent='center' alignItems='center'
                 direction='column' style={{backgroundColor: primaryColor}}>
        <ColorPickerDialog/>
        <Paper id='container' className={classes.paper} elevation={16}>
            <MemoryRouter>
                <Route exact path="/">
                    <Redirect to="/about"/>
                    {/* <Redirect to="/works"/> */}
                </Route>

                <Grid container direction='row' className={classes.content}>
                    {
                        getLeftPart()
                    }

                    {
                        getRightPart()
                    }
                </Grid>
            </MemoryRouter>
        </Paper>
    </Grid>
}

export default App;