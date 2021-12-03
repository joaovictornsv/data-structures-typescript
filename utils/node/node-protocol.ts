export interface NodeProtocol<T> {
  value: T;
  prox: NodeProtocol<T> | null;
}