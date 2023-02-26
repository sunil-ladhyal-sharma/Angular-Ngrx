import { initialState, PostState } from './post.state';
import { createReducer, on } from '@ngrx/store';
import {ADD_POST_ACTION } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(ADD_POST_ACTION, (state, action) => {
    console.log(action);
    let post = { ...action.post };
    post.id = state.post.length + 1;
    return {
      ...state,
      post: [...state.post, post],
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
