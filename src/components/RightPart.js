import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Switch, useLocation} from "react-router-dom";
import About from "../routesComponents/About";
import Contact from "../routesComponents/Contact";
import Skills from "../routesComponents/Skills";
import Projects from "../routesComponents/Projects";
import Route from "react-router-dom/es/Route";
import Blogs from "../routesComponents/Blogs";
import {primaryColor} from '../vars/MainItems'
import SvgHelper from "../helperComponents/SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {BlockPicker} from 'react-color'
import {setPrimaryColor, setDrawerState} from '../vars/ReduxStates'

const styles = {
    upperPart: {
        padding: 16,
    },
    divider: {
        height: 1,
        width: 200,
        marginTop: 8,
        backgroundColor: primaryColor
    },
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const RightPart = (props) => {
    let location = useLocation();
    console.log(location.pathname);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <Grid style={{height: '100%'}} container xs item direction='row' alignContent='flex-start'>
            <Grid style={styles.upperPart} container direction='row' justify='space-between'>
                <Grid>
                    <Button disabled style={styles.currentRoute}>
                        {
                            location.pathname.replace("/", "")
                        }
                    </Button>
                    <Divider orientation="horizontal" style={styles.divider} flexItem/>
                </Grid>

                <IconButton size='small' onClick={() => {
                    setShowDialog(!showDialog)
                }}>
                    <SvgHelper
                        color={props.primaryColor}
                        path='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                        styles={{padding: 8}}
                        size={36}/>
                </IconButton>
            </Grid>

            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/blogs" component={Blogs}/>
            </Switch>

            <Dialog open={showDialog} keepMounted={false} aria-labelledby="alert-dialog-slide-title" onClose={() => {
                setShowDialog(false)
            }}>
                <DialogContent>
                    <BlockPicker color={props.primaryColor}
                                 onSwatchHover={(color, event) => {
                                     setPrimaryColor(color.hex);
                                 }}
                                 colors={['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00', '#DD2C00', '']}/>
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(RightPart);
