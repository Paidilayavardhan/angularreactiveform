import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { SignUpReactiveComponent } from './signup-reactive/signup-reactive.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,SignUpComponent,SignUpReactiveComponent,LoginReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularreactiveform';
}
