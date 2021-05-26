import {Context} from './OvermindHelper'

export const increaseCounter = ({state}: Context, value: number) => {
    state.counter += value;
}
