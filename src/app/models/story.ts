import { Item } from './item';

export interface Story extends Item {
  by?: string;
  descendants?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title?: string;
  url?: string;
  type: 'story';
  comments: Comment[];
}
