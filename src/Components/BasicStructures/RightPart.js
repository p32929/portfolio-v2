import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Others/OvermindHelper";
import TopLeftInfos from "./Right/TopInfoAndButtons";
import TopRightButtons from "./Right/TopRightButtons";
import {Route, Switch} from "react-router-dom";
import {getContainerHeight} from "../../Others/GlobalMethods";
import ProjectsRoute from "./Right/Routes/ProjectsRoute";

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
    useEffect(() => {
        if (!bottomElementStyle) {
            setBottomElementStyle(getBottomElementsHeight(state))
        }
    }, [])

    return (
        <Grid id='right-container' style={getContainerHeight(state.belowSm)} container xs item direction='row'
              alignContent='flex-start'>

            {/*     TOP PART        */}
            <Grid id='right-top-elements' style={styles.upperPart} container direction='row' justify='space-between'>
                <TopLeftInfos/>
                <TopRightButtons/>
            </Grid>

            <Grid id='right-bottom-elements' style={{...bottomElementStyle, ...styles.content}}>
                <Switch>
                    <Route exact path="/projects" component={ProjectsRoute}/>
                </Switch>
            </Grid>
        </Grid>
    );
};

export default RightPart;
