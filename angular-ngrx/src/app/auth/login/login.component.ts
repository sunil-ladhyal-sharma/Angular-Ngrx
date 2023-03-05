import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ERRORS } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup:FormGroup
  errorConstants: any
  constructor(private fb : FormBuilder) {
    this.loginFormGroup = this.fb.group({
      username : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required])
    });

    this.errorConstants = ERRORS
  }

  loginFormSubmit () {
    console.log("login form" , this.loginFormGroup)
  }
}
