
import { sharedReducer } from "../shared/state/shared.reducer";
import { sharedState } from "../shared/state/shared.state";

export interface AppState {
    shared : sharedState
}

export const AppReducer  = {
    shared: sharedReducer
}