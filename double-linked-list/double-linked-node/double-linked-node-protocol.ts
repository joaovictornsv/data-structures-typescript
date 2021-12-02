import { Node } from '../../node/node';

export interface DoubleLinkedNodeProtocol<T> extends Node<T> {
  value: T;
  prox: DoubleLinkedNodeProtocol<T> | null;
  prev: DoubleLinkedNodeProtocol<T> | null
}