import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignUpReactiveComponent } from './signup-reactive/signup-reactive.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

export const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-reactive', component: SignUpReactiveComponent },
  { path: 'login-reactive', component: LoginReactiveComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }