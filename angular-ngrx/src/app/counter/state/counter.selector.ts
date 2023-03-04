import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_NAME_CONSTANTS } from "src/app/shared/constants/constants";
import { counterState } from "./counter.state";


const getCounterState = createFeatureSelector<counterState> (FEATURE_NAME_CONSTANTS.COUNTER_FEATURE_NAME);

export const getCounter  = createSelector(getCounterState, state => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, state => {
    return state.channelName;
})