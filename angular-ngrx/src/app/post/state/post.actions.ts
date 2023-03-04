import { createAction, props } from "@ngrx/store";
import { ACTION_CONSTANTS } from "src/app/shared/constants/constants";
import { Post } from "src/app/shared/models/post.model";

export const ADD_POST_ACTION = createAction(ACTION_CONSTANTS.POST_ADD_ACTION, props<{post:Post}> ());
export const UPDATE_POST_ACTION = createAction(ACTION_CONSTANTS.POST_UPDATE_ACTION, props<{post:Post}>());
export const DELETE_POST_ACTION = createAction(ACTION_CONSTANTS.POST_DELETE_ACTION, props<{id:number}> ())