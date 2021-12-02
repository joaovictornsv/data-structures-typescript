import { DoubleLinkedNodeProtocol } from './double-linked-node-protocol';

class DoubleLinkedNode<T> implements DoubleLinkedNodeProtocol<T> {
  value: T;
  prox: DoubleLinkedNode<T> | null = null;
  prev: DoubleLinkedNode<T> | null = null;
  
  constructor(value: T) {
    this.value = value;
  }
}

export { DoubleLinkedNode }