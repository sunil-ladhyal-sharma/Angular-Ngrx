import { createSelector, createFeatureSelector, props } from "@ngrx/store";
import { selectCurrentRoute, selectRouteParams } from "src/app/router.selectors";
import { FEATURE_NAME_CONSTANTS } from "src/app/shared/constants/constants";



import { PostState } from "./post.state";

 const getPostState = createFeatureSelector<PostState>(FEATURE_NAME_CONSTANTS.POST_FEATURE_NAME);

 export const getPost = createSelector(getPostState, state => {
    return state.post
 });
