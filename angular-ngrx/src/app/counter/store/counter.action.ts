import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const customIncrement = createAction('custom-increment', props<{value:number}> () );
