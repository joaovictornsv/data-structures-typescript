export interface QueueProtocol<T> {
  addToQueue: (item: T) => void;
  unline: () => T;
  size: () => number;
  isEmpty: () => boolean;
  showQueue: () => void;
}
