export interface Item {
  id: number;
  kids?: number[];
  children: Item[];
}
