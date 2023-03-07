import { createReducer, on } from "@ngrx/store"
import { setSpinnerStatus } from "./shared.action"
import { initialState, sharedState } from "./shared.state"

export const _sharedReducer = createReducer(initialState,
    on(setSpinnerStatus,(state, action) => {
        let shared = state
        // shared.spinnerStatus = action.spinnerStatus
        return {
            ...state,
            spinnerStatus : action.spinnerStatus
        }
    })
    )
export function sharedReducer(state:any, action:any) {
    return _sharedReducer(state, action)
}