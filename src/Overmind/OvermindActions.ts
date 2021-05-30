import { Context } from './OvermindHelper'

// export const increaseCounter = ({state}: Context, value: number) => {
//     state.counter += value;
// }

export const setPrimaryColor = ({ state }: Context, value: string) => {
    state.primaryColor = value;
}

export const showLeftPart = ({ state }: Context, value: boolean) => {
    state.isLeftShowing = value;
}

export const showColorPickerDialog = ({ state }: Context, value: boolean) => {
    state.isColorPickerDialogShowing = value;
}