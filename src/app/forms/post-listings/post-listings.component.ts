import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-listings',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './post-listings.component.html',
  styleUrl: './post-listings.component.scss'
})
export class PostListingsComponent {
  postListing!: FormGroup<any>;
  submitted: boolean = false;
  isPreviewMode = false;
  submittedData: any;
  selectedImages: { file: File; preview: string }[] = [];

  apartments = ['Apt One', 'Apt Two', 'Apt Three'];
  amenities = [
    { key: 'gymFitness', label: 'Gym/Fitness Center' },
    { key: 'swimmingPool', label: 'Swimming Pool' },
    { key: 'carPark', label: 'Car Park' },
    { key: 'visitorsParking', label: 'Visitors Parking' },
    { key: 'powerBackup', label: 'Power Backup' },
    { key: 'garbageDisposal', label: 'Garbage Disposal' },
    { key: 'privateLawn', label: 'Private Lawn' },
    { key: 'waterHeater', label: 'Water Heater' },
    { key: 'plantSecuritySystem', label: 'Plant Security System' },
    { key: 'laundryService', label: 'Laundry Service' },
    { key: 'elevator', label: 'Elevator' },
    { key: 'clubHouse', label: 'Club House' }
  ];

  constructor() { }

  ngOnInit() {
    const amenityControls: any = {};
    this.amenities.forEach(a => amenityControls[a.key] = new FormControl(false));

    this.postListing = new FormGroup({
      apartment: new FormControl('', [Validators.required]),
      apartmentName: new FormControl('', [Validators.required]),
      shared: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      squareFeet: new FormControl('', [Validators.required]),
      leaseType: new FormControl('', []),
      expectedRent: new FormControl('', [Validators.required]),
      negotiable: new FormControl(false),
      priceMode: new FormControl('', []),
      furnished: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(1400)]),
      ...amenityControls
    });
  }

  onImageSelect(event: any): void {
    const files: FileList = event.target.files;

    if (!files) return;

    const maxImages = 10;
    const totalFiles = this.selectedImages.length + files.length;

    if (totalFiles > maxImages) {
      alert(`You can only upload up to ${maxImages} images.`);
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push({
          file,
          preview: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }

    // Reset file input to allow re-uploading the same file if deleted
    event.target.value = '';
  }

  removeImage(index: number): void {
    this.selectedImages.splice(index, 1);
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.postListing.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onPreviewListing(): void {
    this.submitted = true;
    if (this.postListing.valid) {
      this.submittedData = {
        ...this.postListing.value,
        images: this.selectedImages.map(img => img.preview)
      };
      this.isPreviewMode = true;
    } else {
      this.postListing.markAllAsTouched();
    }
  }

  editForm(): void {
    this.isPreviewMode = false;
  }

  finalSubmit(): void {
    const payload: any = {};

    Object.entries(this.postListing.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          // You can convert the File to base64 if needed, or skip it
          console.warn(`Skipping file "${key}" – consider handling this separately`);
        } else if (typeof value === 'object') {
          payload[key] = JSON.parse(JSON.stringify(value)); // Deep copy of objects
        } else {
          payload[key] = value; // string, number, boolean
        }
      }
    });
  
    console.log(' Final payload object:', payload);
    // this.selectedImages.forEach((img, index) => {
    //   formData.append('images', img.file);
    // });
  }

}
