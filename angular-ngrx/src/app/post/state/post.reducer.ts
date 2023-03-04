import { initialState, PostState } from './post.state';
import { createReducer, on } from '@ngrx/store';
import {ADD_POST_ACTION, DELETE_POST_ACTION, UPDATE_POST_ACTION } from './post.actions';

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
  }),

  on(UPDATE_POST_ACTION,(state, action) => {
    const updatePost = state.post.map(post => {
        return post.id === action.post.id ? action.post : post;
    })
    return {
        ...state,
        post : updatePost
    }
  }),
  
  on(DELETE_POST_ACTION, (state, action) => {
    const updatedPost = state.post.filter(post => post.id !== action.id)
    return {
      ...state,
       post: updatedPost
    }
  })
);


export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
