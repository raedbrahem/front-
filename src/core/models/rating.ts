export class RatingEtude {
    id!: number | null;
    stars!: number; // Rating value from 1 to 5
    dateRating!: Date;
    user!: {
      id: number;
    };
    serviceEtude!: { // Change this to match the backend
      id: number;
    };
  
    constructor(data?: Partial<RatingEtude>) {
      Object.assign(this, data);
    }
  }
  