export class TutoringEvent {
    id!: number;
    title!: string;
    startTime!: string; // Use string for ISO 8601 format (e.g., "2023-10-15T10:00:00")
    endTime!: string;   // Use string for ISO 8601 format (e.g., "2023-10-15T12:00:00")
    status!: string;
    tutor!: number;
    student!: number;
  }