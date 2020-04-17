import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";
import {Provider} from 'react-redux';
import {reducer} from './vars/ReduxStates'

function App() {
    return (
        <Provider store={reducer}>
            <Portfolio/>
        </Provider>
    );
}

export default App;
