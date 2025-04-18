import { Component } from '@angular/core';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { FeaturedCardComponent } from '../../listing/featured-card/featured-card.component';
import { ProductListingsComponent } from '../../listing/product-listings/product-listings.component';
import { ToastComponent } from '../../common/toast/toast.component';
import { ApartmentListing } from '../../types/apartments.type';
import { ApartmentsService } from '../../services/apartments.service';

@Component({
  selector: 'app-homepage',
  imports: [CarouselComponent, FeaturedCardComponent, ProductListingsComponent, ToastComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
 featuredListings: ApartmentListing[] = [];
  constructor(private apartmentService: ApartmentsService) { }

  ngOnInit(): void {
    this.apartmentService.getFeaturedListings().subscribe((data) => {
      this.featuredListings = data;
    });
  }
}
