import { initialState } from "./post.state";
import {createReducer} from "@ngrx/store";

const _postReducer =  createReducer(initialState);


export function postReducer(state:any, action:any) {
    return _postReducer(state, action)
}