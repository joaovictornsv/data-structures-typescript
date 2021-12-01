export interface StackProtocol<T> {
  stack: (item: T) => void;
  unstack: () => T;
  pick: () => T;
  size: () => number;
  isEmpty: () => boolean;
  isFull: () => boolean;
  showStack: () => void;
}
