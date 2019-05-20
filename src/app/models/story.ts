export interface Story {
  id: number;
  by?: string;
  decendants?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title?: string;
  url?: string;
  type: 'story';
}
