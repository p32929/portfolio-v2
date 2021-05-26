import { GlobalVars } from "../Others/GlobalVars";

export interface State {
    primaryColor: string,
}

export const state: State = {
    primaryColor: GlobalVars.primaryColor
}
