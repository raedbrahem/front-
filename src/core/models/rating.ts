export class RatingEtude {
    id!: number | null;
    stars!: number; // Rating value from 1 to 5
    dateRating!: Date;
    user!: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
    serviceEtude!: { // Change this to match the backend
      id: number;
      subject: string;
      description: string;
    };
  
    constructor(data?: Partial<RatingEtude>) {
      Object.assign(this, data);
    }
  }
  