import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_NAME_CONSTANTS } from "src/app/shared/constants/constants";
import { AuthState } from "./auth.state";


const getAuthState = createFeatureSelector<any>(FEATURE_NAME_CONSTANTS.AUTH_FEATURE_NAME);

export const isAuthenticated = createSelector(getAuthState,state => {
    return state === undefined ? false : state.user.username === '' ? false : true;

})