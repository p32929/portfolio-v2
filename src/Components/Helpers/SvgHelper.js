import React from 'react';
import {useOvermind} from "../../Others/OvermindHelper";
import PropTypes from "prop-types";


const SvgHelper = props => {
    const {state, actions} = useOvermind()
    const {size = 48, path, styles = {}} = props;

    return (
        <svg style={{width: size, height: size, ...styles}} viewBox="0 0 24 24">
            <path fill={state.primaryColor}
                  d={path}/>
        </svg>
    );
};

SvgHelper.propTypes = {
    size: PropTypes.number,
    path: PropTypes.string,
    styles: PropTypes.object
};

export default SvgHelper;
