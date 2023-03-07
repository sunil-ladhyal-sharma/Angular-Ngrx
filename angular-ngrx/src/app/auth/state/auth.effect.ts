import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, Observable } from "rxjs";
import { AuthLoginModel } from "src/app/shared/models/authLogin.model";
import { AuthService } from "../service/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { AuthState } from "./auth.state";

@Injectable({
    providedIn:'root'
})
export class AuthEffect {
    constructor(private action$: Actions, private auth : AuthService) {

    }

//   login$ = createEffect(() => {
//     return this.action$.pipe (
//         ofType(loginStart),
//         exhaustMap((action) => {
//             return this.auth.login(action.username, action.password).pipe(
//                map ((data) => {
//                     return loginSuccess()
//                 })
//             )
//         })
//     )
//   })

  login$ = createEffect(():any => {
    return this.action$?.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        console.log(action)
        return this.auth.login(action.username, action.password)?.pipe(
            map((userToken:AuthLoginModel) => {
                console.log(userToken);
                const user = { username:action.username, token: userToken.token, expiryTime : 10000089}
                const formatedUser = this.auth.formatedUser(user)
                return loginSuccess({user:formatedUser})
            })
        )
      })
    );
  });
}