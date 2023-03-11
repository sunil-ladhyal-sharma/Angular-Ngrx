import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { AuthLoginModel } from "src/app/shared/models/authLogin.model";
import { loginStart, loginSuccess } from "./auth.action";
import { initialState } from "./auth.state";


export  const _authReducer = createReducer(
   initialState,
   on(loginStart, (state, action) => {
    return {
        ...state,
     
    }
   }),

   on(loginSuccess, (state, action) => {
   return { ...state,
   user : action
   }
   })
);


export function authReducer(state:any | undefined, action:any) {
    return _authReducer(state, action);
}