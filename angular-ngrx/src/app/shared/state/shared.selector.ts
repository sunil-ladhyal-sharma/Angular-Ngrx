import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_NAME_CONSTANTS } from "../constants/constants";
import { sharedState } from "./shared.state";


export const getSharedState = createFeatureSelector<sharedState>(FEATURE_NAME_CONSTANTS.SHARED_FEATURE_NAME);
export const getSpinnerStatus = createSelector(getSharedState,state => {
        return state.spinnerStatus;
})