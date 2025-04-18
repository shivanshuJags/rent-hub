import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';
import { ApartmentListing } from '../../types/apartments.type';

@Component({
  selector: 'app-product-listings',
  imports: [CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})


export class ProductListingsComponent {

  listings: ApartmentListing[] = [];

  constructor(private apartmentService: ApartmentsService) { }

  ngOnInit(): void {
    this.apartmentService.getListings().subscribe((data) => {
      this.listings = data;
      console.log(this.listings);
    });
  }

  currentPage = 1;
  pageSize = 6;
  totalPages = 8;

  get paginatedListings() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.listings.slice(start, start + this.pageSize);
  }

  get visiblePages(): (number | string)[] {
    const pages: (number | string)[] = [];

    if (this.totalPages <= 5) {
      return Array(this.totalPages).fill(0).map((_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      pages.push(1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages);
    } else {
      pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
    }

    return pages;
  }

  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
