import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isProfileOpen: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  toggleDropdown(): void {
    this.isProfileOpen = !this.isProfileOpen;
  }

  closeDropdown(): void {
    this.isProfileOpen = false;
  }

  onSignOut(): void {
    // Perform logout logic here, like clearing token or calling logout API
    this.userService.logout(); // example service
    this.router.navigate(['/signin']); // redirect to login page
  }
}
