import { createAction, props } from "@ngrx/store";
import { ACTION_CONSTANTS, FEATURE_NAME_CONSTANTS } from "../constants/constants";

export const setSpinnerStatus = createAction(ACTION_CONSTANTS.SHARED_SET_SPINNER_STATUS,props<{spinnerStatus:boolean}> ());
