export interface RestaurantInfo {
  id: string;
  name: string;
  cloudinaryImageId: string;
  cuisines: string[];
  costForTwo: number;
  deliveryTime: number;
  avgRating: string;
  totalRatings: number;
}

export interface Restaurant {
  type: string;
  data: RestaurantInfo;
  subtype: string;
}
