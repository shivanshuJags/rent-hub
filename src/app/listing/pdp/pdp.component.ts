import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommentsComponent } from '../../common/comments/comments.component';
import { CardDetailsComponent } from '../../common/card-details/card-details.component';
import { ImageGalleryComponent } from '../../common/image-gallery/image-gallery.component';

@Component({
  selector: 'app-pdp',
  imports: [CommonModule, CommentsComponent, CardDetailsComponent, ImageGalleryComponent],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.scss'
})
export class PdpComponent {
  data = {
    title: 'More Details',
    informations: [
      { key: 'Rental Value', value: '₹9,000' },
      { key: 'Address', value: 'Pimpri Chinchwad, Pune, Maharashtra' },
      { key: 'Furnishing', value: 'Unfurnished' }],
    cta1: "Contact Owner",
    star_rating: 4,
    reviews_count: 50,
    description: 'Pimpri Chinchwad is a famous industrial and automotive hub of Pune. The growth in the industrial sector drives residential development in the area primarily in the mid-income segment. It is surrounded by localities such as Vidya Nagar Pimple Saudagar and Tathawade. Some of the key areas in the locality include Bhosari, Vitthal Nagar, Nigdi and Wakad. Some of the key projects of the area are Maharashtra Surbhi Heights, Swastik Spira, Sands Golf Estate, etc. ',
    list_ammenties: [
      { key: 'Safety', value: '4.5' },
      { key: 'Cleanliness', value: '4.5' },
      { key: 'Parking', value: '4.5' }
    ]
  }

  propertyData = {
    title: "About Pimpri Chinchwad",
    cta1: "Contact Owner",
    star_rating: 4,
    price: 9000,
    complete_address: "2 BHK 760 Sq-ft For Rent in Marigold Life, Hinjewadi, Pune",
    highlights: [{
      beds: 2
    }, { baths: 2 }, { balconies: 3 }, { furnished: "Furnished" }],
    reviews_count: 50,
    description: 'Pimpri Chinchwad is a famous industrial and automotive hub of Pune. The growth in the industrial sector drives residential development in the area primarily in the mid-income segment. It is surrounded by localities such as Vidya Nagar Pimple Saudagar and Tathawade. Some of the key areas in the locality include Bhosari, Vitthal Nagar, Nigdi and Wakad. Some of the key projects of the area are Maharashtra Surbhi Heights, Swastik Spira, Sands Golf Estate, etc. ',
    list_ammenties: {
      title: "Amenities",
      ammenties: [
        { key: 'Safety', value: '4' },
        { key: 'Cleanliness', value: '5' },
        { key: 'Parking', value: '3' }
      ]
    },
    more_details: {
      title: "More Details",
      description: 'Pimpri Chinchwad is a famous industrial and automotive hub of Pune. The growth in the industrial sector drives residential development in the area primarily in the mid-income segment. It is surrounded by localities such as Vidya Nagar Pimple Saudagar and Tathawade. Some of the key areas in the locality include Bhosari, Vitthal Nagar, Nigdi and Wakad. Some of the key projects of the area are Maharashtra Surbhi Heights, Swastik Spira, Sands Golf Estate, etc. ',
      action_cta: "Contact Owner",
      details: [{
        key: "Rental Value",
        value: "25,000",
      },
      {
        key: "Security Deposit",
        value: "60,000",
      },
      {
        key: "Address",
        value: "60, Achyutam, Marigold Society, Near Sector R3, Kolte-Patil Life Republic township, Marunji, Hinjewadi, Pune - Pimpri Chinchwad Municipal Corporation, Maharashtra",
      },
      {
        key: "Furnishing",
        value: "Furnished",
      }]
    },
    images: [
      '../../../assets/images/a.jpg',
      '../../../assets/images/b.jpg',
      '../../../assets/images/c.jpg',
      '../../../assets/images/c.jpg',
      '../../../assets/images/a.jpg',
    ]
  }
}
