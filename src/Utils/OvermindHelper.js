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

// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";
import {primaryColor} from './MainItems'

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        counter: 0,
        primaryColor: primaryColor,
        drawerState: true,
        belowSm: false,
        bigDevice: false,
        showColorPickerDialog: false
    },
    actions: {
        increase({state}, number) {
            state.counter += number
        },
        setPrimaryColor({state}, color) {
            state.primaryColor = color
        },
        setBelowSm({state}, b) {
            state.belowSm = b
        },
        setBigDevice({state}, b) {
            state.bigDevice = b
            console.log("BIG: " + state.bigDevice)
        },
        setDrawerState({state}, b) {
            state.drawerState = b
        },
        setShowColorPickerDialog({state}, b) {
            state.showColorPickerDialog = b
        }
    }
});
