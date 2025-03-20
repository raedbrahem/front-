import { Commentaire } from './commentaire';
import { RatingEtude } from './rating';
import { User } from './user';
import { TutoringEvent } from './tutoring-event';
export interface ServiceEtude {
  id: number | null; // Allow null for id
  subject: string;
  description: string;
  tutor: number | null; // Assuming User is another model
  publicationDate: Date | null; // Allow null for publicationDate
  commentaires: Commentaire[]; // Assuming Commentaire is another model
  ratings: RatingEtude[]; // Assuming RatingEtude is another model
  clients: number[] | null;
  tutoringEvents: TutoringEvent[]; // Assuming TutoringEvent is another model
}