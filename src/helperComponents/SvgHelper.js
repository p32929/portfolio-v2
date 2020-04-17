import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const SvgHelper = props => {
    const {size = 48, primaryColor, path, styles = {}} = props;

    return (
        <svg style={{width: size, height: size, ...styles}} viewBox="0 0 24 24">
            <path fill={primaryColor}
                  d={path}/>
        </svg>
    );
};

SvgHelper.propTypes = {
    size: PropTypes.number,
    path: PropTypes.string,
    styles: PropTypes.object
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(SvgHelper);
