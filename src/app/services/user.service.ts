import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isAuthenticated = signal<boolean>(this.getAuthStatusFromStorage());
  constructor() { }

  // Read from localStorage
  private getAuthStatusFromStorage(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isLoggedIn(): boolean {
    return this._isAuthenticated();
  }

  // login method
  login(username: string, password: string): boolean {
    if (username === 'test@test.com' && password === '123456') {
      this._isAuthenticated.set(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Logout
  logout(): void {
    this._isAuthenticated.set(false);
    localStorage.removeItem('isLoggedIn');
  }
}
