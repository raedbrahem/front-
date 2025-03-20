import { ServiceEtude } from "./service_etude";

export interface User {
    id: number | null; // Allow null for id
    nom: string;
    prenom: string;
    adresse: string;
    carteEtudiant: string;
    email: string;
    motDePasse: string;
    niveauEtude: string;
    photoProfil: string;
    dateInscription: Date | null;
    role: Role;
    statutVerification: string;
    telephone: string;
    serviceEtudes: ServiceEtude[]; // Assuming ServiceEtude is another model
    serviceEtudesProvided: ServiceEtude[]; // Assuming ServiceEtude is another model
  }
  
  // Define the Role enum
  export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER'
    // Add other roles as needed
  }