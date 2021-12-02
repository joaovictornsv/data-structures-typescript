import { Node } from '../node/node';
import { QueueProtocol } from './queue-protocol'

class Queue<T> implements QueueProtocol<T> {
  private start: Node<T> | null = null

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

  private getLast(): Node<T> | null {
    if (this.start !== null) {
      let nodeAux = this.start;
      let end = false;
      while(!end) {
        if (nodeAux.prox !== null) {
          nodeAux = nodeAux.prox;
        } else {
          end = true;
        }
      }

      return nodeAux;
    }
    else return this.start;
  };

  isEmpty() { return this.start === null; }

  addToQueue(item: T): void {
    const node = new Node(item, null);
    const lastNode = this.getLast();

    if(lastNode === null) this.start = node;
    else lastNode.prox = node;
  }

  unline(): T {
    if (this.isEmpty()) throw new Error('Unline error:: The queue is empty!');
    
    let start = this.start
    let startValue = start.value
    this.start = this.start.prox;
    start = null;
    return startValue;
  }

  showQueue() {
    let nodeAux = this.start;
    let end = false;
    while(!end) {
      if (nodeAux !== null) {
        process.stdout.write(`${nodeAux.value} `);
        nodeAux = nodeAux.prox;
      } else {
        process.stdout.write(`\n`);
        end = true;
      }
    }
  }

}

export { Queue };
