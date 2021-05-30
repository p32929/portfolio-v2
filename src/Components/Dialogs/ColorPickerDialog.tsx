import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { BlockPicker } from 'react-color'

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
                colors={['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00', '#DD2C00', '']}
            />
        </DialogContent>
    </Dialog>
}

export default ColorPickerDialog;