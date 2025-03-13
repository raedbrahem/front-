export class RatingEtude {
    id!: number;
    stars!: number; // Rating value from 1 to 5
    dateRating!: Date;
    user!: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
    serviceEtudeId!: number;
  
    constructor(data?: Partial<RatingEtude>) {
      Object.assign(this, data);
    }
  }
  