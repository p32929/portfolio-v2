import { Context } from './OvermindHelper'

// export const increaseCounter = ({state}: Context, value: number) => {
//     state.counter += value;
// }

export const setPrimaryColor = ({ state }: Context, value: string) => {
    state.primaryColor = value;
}