import { Stack } from './stack';

const myStack = new Stack<number>(10);

try {
  myStack.stack(4);
  myStack.stack(3);
  myStack.stack(5);
  myStack.stack(10);
  myStack.stack(1);
  myStack.stack(2);
  myStack.stack(54);
  myStack.stack(12);
  myStack.stack(4);
  myStack.showStack();

  myStack.unstack();
  myStack.unstack();
  myStack.unstack();
  myStack.unstack();
  myStack.showStack();
} catch (e) {
  console.log(e.message);
}
