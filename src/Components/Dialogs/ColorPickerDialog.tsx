import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { BlockPicker } from 'react-color'
import { GlobalVars } from '../../Others/GlobalVars';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const ColorPickerDialog: React.FC<Props> = (props) => {
    const { setPrimaryColor, showColorPickerDialog } = useActions()
    const { primaryColor, isColorPickerDialogShowing } = useAppState()

    const classes = useStyles();

    return <Dialog open={isColorPickerDialogShowing} onClose={() => {
        showColorPickerDialog(false)
    }}>
        <DialogContent>
            <BlockPicker
                color={primaryColor}
                onChange={(color, event) => {
                    setPrimaryColor(color.hex)
                    showColorPickerDialog(false)
                }}
                colors={GlobalVars.otherColors}
            />
        </DialogContent>
    </Dialog>
}

export default ColorPickerDialog;