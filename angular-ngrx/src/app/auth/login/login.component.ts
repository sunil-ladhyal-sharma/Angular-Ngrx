import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ERRORS } from 'src/app/shared/constants/constants';
import { AppState } from 'src/app/state/app.state';
import { loginStart } from '../state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup:FormGroup
  errorConstants: any
  constructor(private fb : FormBuilder, private store : Store<AppState>) {
    this.loginFormGroup = this.fb.group({
      username : new FormControl('mor_2314',[Validators.required]),
      password : new FormControl('83r5^_',[Validators.required])
    });

    this.errorConstants = ERRORS
  }

  loginFormSubmit () {
    console.log("login form" , this.loginFormGroup);
    const username = this.loginFormGroup.value.username;
    const password = this.loginFormGroup.value.password;
    this.store.dispatch(loginStart({username, password}))
  }
}
