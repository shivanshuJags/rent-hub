import { Component } from '@angular/core';
import { ApartmentListing } from '../../types/apartments.type';
import { ApartmentsService } from '../../services/apartments.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-card.component.html',
  styleUrl: './featured-card.component.scss'
})
export class FeaturedCardComponent {
  featuredListing?: ApartmentListing | undefined;
  constructor(private apartmentService: ApartmentsService, private router: Router) { }

  ngOnInit(): void {
    this.apartmentService.getHighlightListing().subscribe((data) => {
      this.featuredListing = data;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/pdp', id]);

  }

  markAsFavourite(event: Event): void {
    event.stopPropagation();
  }
}
