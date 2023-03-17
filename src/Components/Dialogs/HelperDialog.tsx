import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, makeStyles } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { GlobalVars } from '../../Others/GlobalVars';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const HelperDialog: React.FC<Props> = (props) => {
    // Hooks
    const actions = useActions()
    const states = useAppState()
    const classes = useStyles();

    return (
        <Dialog open={GlobalVars.helperTexts !== "" && GlobalVars.helperFormLink !== "" && states.isHelperDialogShowing}>
            <DialogContent>
                {GlobalVars.helperTexts}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    actions.showHelperDialog(false)
                }}>
                    No
                </Button>

                <Button onClick={() => {
                    actions.showHelperDialog(false)
                    window?.open(GlobalVars.helperFormLink, '_blank')?.focus()
                }}>
                    Yes
                </Button>

            </DialogActions>
        </Dialog>
    )

}

export default HelperDialog;