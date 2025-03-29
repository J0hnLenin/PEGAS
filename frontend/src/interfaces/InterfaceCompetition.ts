export interface Competitions {
  id: number;
  name: string;
  startDate: string;
  finishDate: string;
  comment: string;
}

export interface CompetitionDetails {
  id: number;
  name: string;
  startDate: string;
  finishDate: string;
  organization: string;
  comment: string;
  details: object;
}

