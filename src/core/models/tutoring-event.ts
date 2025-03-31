// tutoring-event.model.ts
export class TutoringEvent {
  id!: number | null;
  title!: string;
  startTime!: string;
  endTime!: string;
  status!: string;
  tutor!: { id: number };
  student!: { id: number };
  serviceEtude!: { id: number }; // Add this required field
  price!: number;

  constructor(data?: Partial<TutoringEvent>) {
    Object.assign(this, data);
    this.tutor = this.tutor || { id: 0 };
    this.student = this.student || { id: 0 };
    this.serviceEtude = this.serviceEtude || { id: 0 }; // Initialize
  }
}