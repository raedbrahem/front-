import { Commentaire } from './commentaire';
import { RatingEtude } from './rating';

export class ServiceEtude {
    id!: number;
    subject!: string;
    description!: string;
    publicationDate!: Date;
    tutor!: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
    commentaires!: Commentaire[];
    ratings!: RatingEtude[];
    clients!: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    }[];
    status!: string;
  
    constructor(data?: Partial<ServiceEtude>) {
      Object.assign(this, data);
    }
  }