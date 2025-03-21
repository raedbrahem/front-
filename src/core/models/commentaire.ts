export class Commentaire {
    id!: number | null;
    contenu!: string;
    datePublication!: Date;
    user!: {
      id: number;
    };
serviceEtude!: { // Change this to match the backend
      id: number;
    };  
    constructor(data?: Partial<Commentaire>) {
      Object.assign(this, data);
    }
  }
  