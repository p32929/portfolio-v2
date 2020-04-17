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

import {createStore} from 'redux'
import {primaryColor} from '../vars/MainItems'

const SET_DRAWER_STATE = 'SET_DRAWER_STATE';
const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';

var store = {
    primaryColor: primaryColor,
    drawerState: true, // Duh! True means open
}

export const reducer = createStore(function reducer(state = store, action) {
    switch (action.type) {
        case SET_DRAWER_STATE:
            console.log(SET_PRIMARY_COLOR+ " " + JSON.stringify(state))
            return {
                ...state,
                drawerState: action.state
            }
            break;

        case SET_PRIMARY_COLOR:
            console.log(SET_PRIMARY_COLOR+ " " + JSON.stringify(state))
            return {
                ...state,
                primaryColor: action.state
            }
            break;

        default:
            console.log("DEFAULT")
            return state;
    }
}, );

export const setDrawerState = (state) => {
    reducer.dispatch({
        type: SET_DRAWER_STATE,
        state: state
    })
}

export const setPrimaryColor = (color) => {
    reducer.dispatch({
        type: SET_PRIMARY_COLOR,
        state: color
    })
}