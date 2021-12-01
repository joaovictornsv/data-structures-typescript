import { QueueProtocol } from './queue-protocol'

class Queue<T> implements QueueProtocol<T> {
  private readonly items: Array<T> = [];

  constructor(private maxItems: number = 0) {}

  size(): number { return this.items.length; }

  isEmpty(): boolean { return this.size() === 0; }

  isFull(): boolean { return this.size() === this.maxItems; }

  addToQueue(item: T): void {
    if (this.isFull()) throw new Error('Impossible add to queue:: The queue is full!');
    this.items.push(item);
  }

  unline(): T {
    if (this.isEmpty()) throw new Error('Unline error:: The queue is empty!');
    return this.items.shift();
  }

  showQueue() {
    this.items.forEach((item, index) => {
      if (index === 0) process.stdout.write(`${item}`);
      else process.stdout.write(" <- " + `${item}`);
      if (index === this.size()-1) process.stdout.write("\n");
    });
  }

}

export { Queue };
