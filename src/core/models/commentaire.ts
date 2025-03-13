export class Commentaire {
    id!: number;
    contenu!: string;
    datePublication!: Date;
    user!: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
    serviceEtudeId!: number;
  
    constructor(data?: Partial<Commentaire>) {
      Object.assign(this, data);
    }
  }
  