import { LinkedList } from './linked-list';

const myLinkedList = new LinkedList<number>();
console.log('size', myLinkedList.size())
console.log('isEmpty', myLinkedList.isEmpty())

myLinkedList.push(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
console.log('size', myLinkedList.size())

myLinkedList.remove(4);
myLinkedList.showList();
console.log('size', myLinkedList.size())

myLinkedList.insert(4, 8);

myLinkedList.showList();