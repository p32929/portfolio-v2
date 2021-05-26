import {IContext} from 'overmind'
import {state} from './OvermindState'
import * as actions from './OvermindActions'
import {createActionsHook, createStateHook} from 'overmind-react'

export const config = {
    state,
    actions
};

export type Context = IContext<{
    state: typeof config.state
    actions: typeof config.actions
}>


export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
