import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApartmentListing } from '../../types/apartments.type';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() listings: ApartmentListing[] = [];

  constructor(private router: Router) { }

  goToDetails(id: number): void {
    this.router.navigate(['/pdp', id]);
  }
}
