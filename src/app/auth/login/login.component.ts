import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginForm, LoginFormType } from '../types/auth.types';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginFormType>;
  isLoginError: boolean = false;
  @Output() isRegisterSuccess = new EventEmitter<void>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }


  onLogin(): void {
    if (this.loginForm.valid) {
      // const email = this.loginForm.get('email')?.value as string;
      // const password = this.loginForm.get('password')?.value as string;

      const { email, password } = this.loginForm.value as LoginForm
      if (this.userService.login(email, password)) {
        this.router.navigate(['']);
        this.isLoginError = false;
      } else {
        this.isLoginError = true;
      }
    }
  }

  switchToRegister(): void {
    this.isRegisterSuccess.emit();
  }
}
