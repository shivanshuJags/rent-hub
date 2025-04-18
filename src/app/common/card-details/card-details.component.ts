import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-card-details',
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  @Input() cardDetails: any;
  showFullDescription: boolean = false;

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }
}
