export interface LinkedListProtocol<T> {
  push: (item: T) => void;
  pop: () => void;
  insert: (item: T, index: number) => void;
  remove: (index: number) => void;
  isEmpty: () => boolean;
  size: () => number;
  showList: () => void;
}