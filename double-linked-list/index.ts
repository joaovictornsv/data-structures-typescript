import { DoubleLinkedList } from './double-linked-list';

const myDoubleLinkedList = new DoubleLinkedList<number>();
console.log('size', myDoubleLinkedList.size())
console.log('isEmpty', myDoubleLinkedList.isEmpty())
myDoubleLinkedList.showList();
myDoubleLinkedList.showList('reverse');

myDoubleLinkedList.push(0);
myDoubleLinkedList.push(1);
myDoubleLinkedList.push(2);
myDoubleLinkedList.push(3);
myDoubleLinkedList.push(4);
myDoubleLinkedList.push(5);
myDoubleLinkedList.push(6);
myDoubleLinkedList.push(7);
console.log('size', myDoubleLinkedList.size())

myDoubleLinkedList.remove(4);
myDoubleLinkedList.showList();
myDoubleLinkedList.showList('reverse');
console.log('size', myDoubleLinkedList.size())

myDoubleLinkedList.insert(4, 0);
myDoubleLinkedList.insert(33, 5);
myDoubleLinkedList.insert(23, 9);
myDoubleLinkedList.showList();
myDoubleLinkedList.showList('reverse');

myDoubleLinkedList.remove(9);
myDoubleLinkedList.remove(3);

myDoubleLinkedList.showList();
myDoubleLinkedList.showList('reverse');