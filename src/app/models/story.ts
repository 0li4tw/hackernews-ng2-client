export interface Story {
  id: number;
  by?: string;
  descendants?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title?: string;
  url?: string;
  type: 'story';
}
