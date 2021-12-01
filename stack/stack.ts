import { StackProtocol } from './stack-protocol';

class Stack<T> implements StackProtocol<T> {
  private readonly items: Array<T> = [];

  constructor(private maxItems: number = 0) {}

  size(): number { return this.items.length; }

  isEmpty(): boolean { return this.size() === 0; }

  isFull(): boolean { return this.size() === this.maxItems; }

  stack(item: T): void {
    if (this.isFull()) throw new Error('Stack error:: The stack is full!');
    this.items.unshift(item);
  }

  unstack(): T {
    if (this.isEmpty()) throw new Error('Unstack error:: The stack is empty!');
    return this.items.shift();
  }

  showStack() {
    console.log('Top');
    console.log('-----------');
    this.items.forEach((item, index) => console.log(item));
    console.log('-----------');
    console.log('Base');
  }
}

export { Stack };
