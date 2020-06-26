import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../Others/OvermindHelper";
import SvgHelper from "../../Helpers/SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {useLocation} from "react-router-dom";

const styles = {
    divider: {
        height: 1,
        marginTop: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const TopLeftInfos = () => {
    let location = useLocation();
    const {state, actions} = useOvermind()

    return (
        <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
            <Grid>
                {
                    state.belowSm && <IconButton size='small' onClick={() => {
                        actions.setDrawerState(true);
                    }}>
                        <SvgHelper
                            path='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
                            styles={{padding: 8}}
                            size={36}/>
                    </IconButton>
                }
                <Button disabled style={styles.currentRoute}>
                    {location.pathname.replace("/", "")}
                </Button>
            </Grid>
            <Divider orientation="horizontal" style={{
                backgroundColor: state.primaryColor, ...styles.divider,
                width: state.belowSm ? 160 : 200
            }}
                     flexItem/>
        </Grid>
    );
};

export default TopLeftInfos;
