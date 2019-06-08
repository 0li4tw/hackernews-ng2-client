import { Item } from './item';

export interface Comment extends Item {
  by?: string;
  parent?: number;
  text?: string;
  time?: number;
  type: 'comment';
  comments?: Comment[];
  kids?: number[];
}
