import {createStore} from 'redux'
import {primaryColor} from '../vars/MainItems'

const SET_DRAWER_STATE = 'SET_DRAWER_STATE';
const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';

var store = {
    drawerState: true, // Duh! True means open
    primaryColor: primaryColor,
}

export const reducer = createStore(function reducer(state = store, action) {
    switch (action.type) {
        case SET_DRAWER_STATE:
            return {
                drawerState: action.state
            }
            break;

        case SET_PRIMARY_COLOR:
            return {
                primaryColor: action.state
            }
            break;

        default:
            return state;
    }
});

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