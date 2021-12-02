import { NodeProtocol } from './node-protocol';

class Node<T> implements NodeProtocol<T> {
  value: T;
  prox: Node<T> | null = null;
  constructor(value: T, prox:  Node<T> | null = null) {
    this.value = value;
    this.prox = prox;
  }
}

export { Node }