import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth',
  imports: [RouterModule, CommonModule, RegisterComponent, LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isRegistered: boolean = false;

  onRegisterSuccess(isRegister: boolean): void {
    this.isRegistered = isRegister;
  }
}
