export interface StackProtocol<T> {
  stack: (item: T) => void;
  unstack: () => T;
  size: () => number;
  isEmpty: () => boolean;
  isFull: () => boolean;
  showStack: () => void;
}
