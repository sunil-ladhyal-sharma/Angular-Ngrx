import { createReducer, on } from "@ngrx/store"
import { setErrorStatus, setSpinnerStatus } from "./shared.action"
import { customError, initialState, sharedState } from "./shared.state"

export const _sharedReducer = createReducer(initialState,
    on(setSpinnerStatus,(state, action) => {
        let shared = state
        // shared.spinnerStatus = action.spinnerStatus
        return {
            ...state,
            spinnerStatus : action.spinnerStatus
        }
    })
,

on(setErrorStatus,(state,action) => {
  return{
    ...state,
    error : action.error
  }
})
    )
export function sharedReducer(state:any, action:any) {
    return _sharedReducer(state, action)
}