import { Node } from '../node/node';
import { StackProtocol } from './stack-protocol';

class Stack<T> implements StackProtocol<T> {
  private start: Node<T> | null = null

  constructor(private maxItems: number = 0) {}

  size() {    
    if (this.isEmpty()) return 0;
    else {
      let nodeAux = this.start;
      let end = false;
      let cont = 0;
      while(!end) {
        if (nodeAux !== null) {
          cont += 1;
          nodeAux = nodeAux.prox;
        } else {
          end = true;
        }
      }

      return cont;
    }
  };

  isEmpty() { return this.start === null; }

  stack(item: T): void {
    let oldStart = this.start
    this.start = new Node(item);
    this.start.prox = oldStart;
  }

  unstack(): T {
    if (this.isEmpty()) throw new Error('Unstack error:: The stack is empty!');
    
    let start = this.start
    let startValue = start.value
    this.start = this.start.prox;
    start = null;
    return startValue;
  }

  showStack() {
    console.log('Top');
    console.log('-----------');
    let nodeAux = this.start;
    let end = false;
    while(!end) {
      if (nodeAux !== null) {
        process.stdout.write(`${nodeAux.value}\n`);
        nodeAux = nodeAux.prox;
      } else {
        end = true;
      }
    }
    console.log('-----------');
    console.log('Base');
  }
}

export { Stack };
