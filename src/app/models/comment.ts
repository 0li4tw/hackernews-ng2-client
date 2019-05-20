export interface Comment {
  id: number;
  by?: string;
  kids?: number[];
  parent?: number;
  text?: string;
  time?: number;
  type: 'comment';
}
