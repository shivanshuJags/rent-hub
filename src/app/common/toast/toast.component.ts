import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, RouterModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  constructor(private router: Router) { }

  redirect(): void {
    this.router.navigate(['/post']);
  }
}
