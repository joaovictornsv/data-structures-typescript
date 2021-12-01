import { Queue } from './queue';

const myQueue = new Queue<number>(10);

try {
  myQueue.addToQueue(4);
  myQueue.addToQueue(3);
  myQueue.addToQueue(5);
  myQueue.addToQueue(10);
  myQueue.addToQueue(1);
  myQueue.addToQueue(2);
  myQueue.addToQueue(54);
  myQueue.addToQueue(12);
  myQueue.addToQueue(9);
  myQueue.showQueue();
} catch (e) {
  console.log(e.message);
}
