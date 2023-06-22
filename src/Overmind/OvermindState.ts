import { GlobalVars } from "../Others/GlobalVars";

export interface State {
    primaryColor: string,
    isLeftShowing: boolean,
    isColorPickerDialogShowing: boolean,
    isHelperDialogShowing: boolean,
    isMenuClicked: boolean,
}

export const state: State = {
    primaryColor: GlobalVars.primaryColor,
    isLeftShowing: true,
    isColorPickerDialogShowing: false,
    isHelperDialogShowing: false,
    isMenuClicked: false,
}
