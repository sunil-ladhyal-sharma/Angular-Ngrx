import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME_CONSTANTS } from '../shared/constants/constants';
import { LoginComponent } from './login/login.component';
import { AuthEffect } from './state/auth.effect';
import { authReducer } from './state/auth.reducer';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature(FEATURE_NAME_CONSTANTS.AUTH_FEATURE_NAME, authReducer),
    HttpClientModule,
  ],
})
export class AuthModule {}
