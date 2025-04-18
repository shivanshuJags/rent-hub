export interface ApartmentListing {
    id: number;
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    society: string,
    expected_rent: number;
    street: string;
    shared_property: boolean;
    furnished: boolean;
    area_sqft: number;
    address: string;
    amenities: string[];
    image: string[];
    feature_image: string;
    isFeatured: boolean;
    highlight: boolean;
    description: string;
}