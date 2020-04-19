/*
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItem from "../helperComponents/ListItem";
import {skills} from "../vars/GlobalVariables";
import TypographyWithIcon from "../helperComponents/TypographyWithIcon";
import {connect} from "react-redux";

const styles = {
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    listGridInner: {}
}

const getTextAndList = (item) => {
    if (item) {
        return (
            <div>
                {
                    item.text && <TypographyWithIcon>{item.text}</TypographyWithIcon>
                }
                {
                    item.arr && item.arr.length > 0 && <Grid style={{marginBottom: 16}} container direction='row'>
                        {
                            item.arr.map(item => <ListItem item={item}/>)
                        }
                    </Grid>
                }
            </div>
        )
    }
}

const Skills = () => {
    return (
        <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
            {
                skills.map((item) => {
                    return getTextAndList(item);
                })
            }
        </Grid>
    );
};

const mapStateToProps = state => ({
    primaryColor: state.primaryColor,
    drawerState: state.drawerState,
})

export default connect(mapStateToProps)(Skills);