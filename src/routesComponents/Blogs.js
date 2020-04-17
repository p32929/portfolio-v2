import React from 'react';
import {connect} from "react-redux";

const Blogs = () => {
    return (
        <div>
            Blogs
        </div>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(Blogs);