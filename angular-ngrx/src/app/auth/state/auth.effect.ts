import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, Observable, of } from "rxjs";
import { AuthLoginModel } from "src/app/shared/models/authLogin.model";
import { setErrorStatus, setSpinnerStatus } from "src/app/shared/state/shared.action";
import { customError } from "src/app/shared/state/shared.state";
import { AppState } from "src/app/state/app.state";
import { AuthService } from "../service/auth.service";
import { loginStart, loginSuccess } from "./auth.action";

@Injectable({
    providedIn:'root'
})
export class AuthEffect {
  formatedError!:customError;
    constructor(private action$: Actions, private auth : AuthService, private store : Store<AppState>) {

    }


/* Calling Api using Ngrx Effect:
      *It is the best pratice to implement the api caling using ngrx effect.
      *It will increase the performance of the application.
       */
  login$ = createEffect(():any => {
    /* Getting all the actions  */
    return this.action$?.pipe(
      /* Filter out login start action. */
      ofType(loginStart),
      exhaustMap((action) => {
        /* Getting login start action triggered here. */
        console.log(action)
        /* Calling the auth service to call the api  */
        return this.auth.login(action.username, action.password)?.pipe(
            /* Getting response of auth api respons using map. */
            map((userToken:AuthLoginModel) => {
                console.log(userToken);
                /* Creating custom user object and add desired info becasue our api just give token only. */
                const user = { username:action.username, token: userToken.token, expiryTime : 10000089}
                /* Formated User function formated the data into user and returning User. */
                const formatedUser = this.auth.formatedUser(user)
                /* Sending the Formated User to the login sucess action. So that we can store it into the ngrx store. */
                this.store.dispatch(setSpinnerStatus({spinnerStatus:false}));
                this.formatedError = {showError : false, errorMessage: ''}
                this.store.dispatch(setErrorStatus({error:this.formatedError}))
                return loginSuccess({user:formatedUser});


            }),
            catchError((err) => {
              console.log(err)
              // const formatedError:customError = {showError : true, errorMessage: ''};
              this.formatedError =  {showError : true, errorMessage: ''};
              this.formatedError.errorMessage =  this.auth.formatedError(err.error);
              this.store.dispatch(setSpinnerStatus({spinnerStatus:false}));
              return of(this.store.dispatch(setErrorStatus({error:this.formatedError})));
            })
        )
      })
    );
  });
}