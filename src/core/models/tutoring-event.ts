// tutoring-event.model.ts
export class TutoringEvent {
  id!: number | null;
  title!: string;
  startTime!: string;
  endTime!: string;
  status!: string;
  student!: { id: number };
  serviceEtude!: { id: number }; // Add this required field
  price!: number;

  constructor(data?: Partial<TutoringEvent>) {
    Object.assign(this, data);
    this.student = this.student || { id: 0 };
    this.serviceEtude = this.serviceEtude || { id: 0 }; // Initialize
  }
}