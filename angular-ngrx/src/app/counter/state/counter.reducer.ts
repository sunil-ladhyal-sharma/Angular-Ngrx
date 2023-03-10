import { createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment} from './counter.action';
import {  counterState, initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state:counterState) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state:counterState) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(customIncrement, (state:counterState, action:any) => {
    return { ...state, counter: state.counter + action.value };
  })
  // initialStat counterActions.action, state => ({ ...state, prop: updatedValue })),
);

export function counterReducer(state: any, action: any) {
return  _counterReducer(state, action);
}
