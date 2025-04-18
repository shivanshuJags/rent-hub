import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApartmentListing } from '../types/apartments.type';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  private jsonUrl = 'assets/rento_hub.json';

  constructor(private http: HttpClient) { }

  getListings(): Observable<ApartmentListing[]> {
    console.log(this.jsonUrl);
    return this.http.get<ApartmentListing[]>(this.jsonUrl);
  }

  getFeaturedListings(): Observable<ApartmentListing[]> {
    return this.http.get<ApartmentListing[]>(this.jsonUrl).
      pipe(map(listings => listings.filter(listing => listing.isFeatured)))
  }

  getHighlightListing(): Observable<ApartmentListing | undefined> {
    return this.http.get<ApartmentListing[]>(this.jsonUrl).pipe(
      map(listings => listings.find(listing => listing.highlight))
    );
  }
}
