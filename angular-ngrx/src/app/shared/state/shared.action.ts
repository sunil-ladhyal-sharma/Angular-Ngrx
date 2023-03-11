import { createAction, props } from "@ngrx/store";
import { ACTION_CONSTANTS, FEATURE_NAME_CONSTANTS } from "../constants/constants";
import { customError } from "./shared.state";

export const setSpinnerStatus = createAction(ACTION_CONSTANTS.SHARED_SET_SPINNER_STATUS,props<{spinnerStatus:boolean}> ());

export const setErrorStatus = createAction(ACTION_CONSTANTS.SHARED_SET_ERROR_STATUS, props<{error:customError}>())
