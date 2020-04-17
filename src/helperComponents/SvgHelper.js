import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const SvgHelper = props => {
    const {size = 48, color = "#6F6F6F", path, styles = {}} = props;

    return (
        <svg style={{width: size, height: size, ...styles}} viewBox="0 0 24 24">
            <path fill={color}
                  d={path}/>
        </svg>
    );
};

SvgHelper.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    path: PropTypes.string,
    styles: PropTypes.object
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(SvgHelper);
