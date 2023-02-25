import { counterReducer } from "../counter/store/counter.reducer";
import { counterState } from "../counter/store/counter.state";
import { postReducer } from "../post/store/post.reducer";
import { PostState } from "../post/store/post.state";

export interface AppState {
    counter : counterState,
    post : PostState
}

export const AppReducer  = {
counter : counterReducer,
post : postReducer
}