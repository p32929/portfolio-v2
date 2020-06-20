import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import TopLeftInfos from "./Right/TopInfoAndButtons";
import TopRightButtons from "./Right/TopRightButtons";
import {Route, Switch, useLocation} from "react-router-dom";
import {getContainerHeight} from "../../Others/GlobalMethods";
import ProjectsRoute from "./Right/Routes/ProjectsRoute";
import SkillsRoute from "./Right/Routes/SkillsRoute";
import ContactRoute from "./Right/Routes/ContactRoute";
import AboutRoute from "./Right/Routes/AboutRoute";
import ColorPickerDialog from "../Dialogs/ColorPickerDialog";

const styles = {
    upperPart: {
        padding: 16,
    },
    content: {
        overflowY: 'auto',
        paddingLeft: 12,
        paddingRight: 4,
        paddingBottom: 8
    }
}

const getBottomElementsHeight = (state) => {
    var topElementHeight = document.getElementById('right-top-elements').clientHeight
    var containerHeight = getContainerHeight(state.belowSm).height
    var bottomElementHeight = containerHeight - topElementHeight;

    return {
        maxHeight: bottomElementHeight - 5,
        height: bottomElementHeight - 5,
    }
}

const RightPart = () => {
    const {state, actions} = useOvermind()
    const [bottomElementStyle, setBottomElementStyle] = useState(null)
    let location = useLocation();

    useEffect(() => {
        if (!bottomElementStyle) {
            setBottomElementStyle(getBottomElementsHeight(state))
        }
    }, [])

    useEffect(() => {
        document.getElementById('right-bottom-elements').scroll(0, 0)
    }, [location])

    return (
        <Grid id='right-container' style={{...getContainerHeight(state.belowSm), width: '100%'}} container xs item
              direction='row'
              alignContent='flex-start'>

            {/*     TOP PART        */}
            <Grid id='right-top-elements' style={styles.upperPart} container direction='row' justify='space-between'>
                <TopLeftInfos/>
                <TopRightButtons/>
            </Grid>

            <Grid id='right-bottom-elements' container style={{...bottomElementStyle, ...styles.content}}>
                <Switch>
                    <Route exact path="/about" component={AboutRoute}/>
                    <Route exact path="/skills" component={SkillsRoute}/>
                    <Route exact path="/projects" component={ProjectsRoute}/>
                    <Route exact path="/contact" component={ContactRoute}/>
                </Switch>
            </Grid>

            <ColorPickerDialog/>
        </Grid>
    );
};

export default RightPart;
