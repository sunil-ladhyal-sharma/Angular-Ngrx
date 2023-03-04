import { createSelector, createFeatureSelector, props } from "@ngrx/store";
import { selectCurrentRoute, selectRouteParams } from "src/app/router.selectors";
import { Post } from "src/app/shared/models/post.model";


import { PostState } from "./post.state";

 const getPostState = createFeatureSelector<PostState>('post');

 export const getPost = createSelector(getPostState, state => {
    return state.post
 });
