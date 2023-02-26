import { createAction, props } from "@ngrx/store";
import { ACTION_CONSTANTS } from "src/app/shared/constants/constants";


export const increment = createAction(ACTION_CONSTANTS.COUNTER_INCREMENT_ACTION);
export const decrement = createAction(ACTION_CONSTANTS.COUNTER_DECREMENT_ACTION);
export const customIncrement = createAction(ACTION_CONSTANTS.COUNTER_CUSTOM_ACTION, props<{value:number}> () );
