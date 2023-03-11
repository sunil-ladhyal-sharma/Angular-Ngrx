import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AuthState } from 'src/app/auth/state/auth.state';
import { AppState } from 'src/app/state/app.state';
import { AuthLoginModel } from '../models/authLogin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  authenticated! :Observable<boolean>
  constructor(private store : Store<AppState>) {
   this.authenticated = this.store.select(isAuthenticated)
  }

}
