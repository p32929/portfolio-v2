import React from 'react';
import {useOvermind} from "../../Others/OvermindHelper";
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
