import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getErrorStatus, getSpinnerStatus } from './shared/state/shared.selector';
import { customError } from './shared/state/shared.state';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-ngrx';
  shouldSpinnerShow?:Observable<boolean>
  customError ? :customError
  constructor(private store : Store<AppState>) {
   
    this.shouldSpinnerShow =  this.store.select(getSpinnerStatus)
      this.store.select(getErrorStatus).subscribe(res => {
        this.customError = res;
      });
  }

  ngOnInit(): void {
   
  }
}
