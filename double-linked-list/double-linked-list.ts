import { DoubleLinkedListProtocol } from './double-linked-list-protocol';
import { DoubleLinkedNode as Node } from './double-linked-node/double-linked-node';

class DoubleLinkedList<T> implements DoubleLinkedListProtocol<T> {
  private start: Node<T> | null = null;

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

  push(item: T) {
    const node = new Node(item);
    const lastNode = this.getLast();

    if (lastNode === null) {      
      node.prev = null;
      this.start = node;
    }
    else {
      node.prev = lastNode;
      lastNode.prox = node;
    }    
  };

  isEmpty() { return this.start === null; }
  
  pop() {
    if (this.isEmpty()) throw new Error('Impossible remove: empty list!');

    let node = this.start;
    let aux: Node<T> = null;
    let end = false;
    while(!end) {
      if (node.prox !== null) {
        aux = node;
        node = node.prox;
      } else {
        node = null;
        aux.prox = null;
        end = true;
      }
    }
  };


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

  showList(mode: 'normal' | 'reverse' = 'normal') {
    if (this.isEmpty()) {
      console.log('The list is empty!');
    } else

    if (mode === 'normal') {
      let nodeAux = this.start;
      let end = false;
      while(!end) {      
        if (nodeAux.prev === null) {
          process.stdout.write(`null <- ${nodeAux.value} <-> `);
          nodeAux = nodeAux.prox;
        } else
        if (nodeAux.prox !== null) {
          process.stdout.write(`${nodeAux.value} <-> `);
          nodeAux = nodeAux.prox;
        } else {
          process.stdout.write(`${nodeAux.value} -> null\n`);
          end = true;
        }
      }
    } else if (mode === 'reverse') {
      let nodeAux = this.getLast();
      let end = false;
      while(!end) {      
        if (nodeAux.prox === null) {
          process.stdout.write(`null <- ${nodeAux.value} <-> `);
          nodeAux = nodeAux.prev;
        } else
        if (nodeAux.prev !== null) {
          process.stdout.write(`${nodeAux.value} <-> `);
          nodeAux = nodeAux.prev;
        } else {
          process.stdout.write(`${nodeAux.value} -> null\n`);
          end = true;
        }
      }
    }
  };

  insert(item: T, index: number) {
    if (this.isEmpty()) throw new Error('Impossible insert: empty list!');

    let node = this.start;
    let aux: Node<T> = null;
    let end = false;
    let added = false;
    let cont = 0;
    while(!end) {
      if (node !== null) {
        if (index === cont) {
          end = true;
          break;
        }
        else {
          aux = node;
          node = node.prox;
          cont += 1;
        }
      } else {       
        if (cont === index) {
          this.push(item);          
          added = true
          end = true;
          break;
        }
        else throw new Error('Impossible insert: list not have this index!');
      }
    }

    if (!added) {
      const newNode = new Node(item);
      if (aux !== null) {
        aux.prox = newNode;
        newNode.prev = aux;
      } else if (node === this.start) {
        this.start = newNode;
        newNode.prev = null;
      }
      newNode.prox = node;
      if (node !== null) node.prev = newNode;      
    }
  }

  remove(index: number) {
    if (this.isEmpty()) throw new Error('Impossible remove: empty list!');

    let node = this.start;
    let aux: Node<T> = null;
    let end = false;
    let cont = 0;
    while(!end) {
      if (node !== null) {
        if (index === cont) { end = true; break; }
        else {
          aux = node;
          node = node.prox;
          cont += 1;
        }
      } else {
        throw new Error('Impossible insert: list not have this index!');
      }
    }    

    if (aux !== null) {
      aux.prox = node.prox;
      if (node.prox !== null) node.prox.prev = aux;
    }
    if (node === this.start) {
      this.start = node.prox;
      if (node.prox !== null) node.prox.prev = this.start;
      this.start.prev = null;
    }
    node = null;
  }
}

export { DoubleLinkedList };
