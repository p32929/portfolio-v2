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
const SET_WITH_LOWER_THAN_BREAKPOINT = 'SET_WITH_LOWER_THAN_BREAKPOINT';

var store = {
    primaryColor: primaryColor,
    drawerState: true, // Duh! True means open
    widthLowerThanBreakpoint: false
}

export const reducer = createStore((state = store, action) => {
    switch (action.type) {
        case SET_DRAWER_STATE:
            return {
                ...state,
                drawerState: action.state
            }

        case SET_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.state
            }

        case SET_WITH_LOWER_THAN_BREAKPOINT:
            return {
                ...state,
                widthLowerThanBreakpoint: action.state
            }

        default:
            console.log("DEFAULT")
            return state;
    }
},);

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

export const setWidthLowerThanBreakpoint = (isMatched) => {
    reducer.dispatch({
        type: SET_WITH_LOWER_THAN_BREAKPOINT,
        state: isMatched
    })
}