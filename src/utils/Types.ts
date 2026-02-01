export interface Restaurant {
  info: {
    id: string;
    name: string;
    avgRating?: number;
    avgRatingString: string;
    cuisines: string[];
    costForTwo: string;
    sla: {
      deliveryTime: number;
    };
    cloudinaryImageId: string;
  };
}
