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
import {useOvermind} from "../Utils/OvermindHelper";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {BlockPicker} from 'react-color'

const ColorPickerDialog = () => {
    const {state, actions} = useOvermind()

    return (
        <Dialog open={state.showColorPickerDialog} keepMounted={false} aria-labelledby="alert-dialog-slide-title"
                onClose={() => {
                    actions.setShowColorPickerDialog(false)
                }}>
            <DialogContent>
                <BlockPicker color={state.primaryColor}
                             onChange={(color, event) => {
                                 actions.setShowColorPickerDialog(false)
                                 actions.setPrimaryColor(color.hex);
                             }}
                             colors={['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00', '#DD2C00', '']}/>
            </DialogContent>
        </Dialog>
    );
};

export default ColorPickerDialog;
