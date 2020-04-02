const LinkedList = require('./LinkedList');
const DoublyLinkedList = require('./doubleLinkedList')
const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);

const DoubleList = new DoublyLinkedList();
function createDoublyLinkedList(list) {

    let element = list.getHead;
    for (let i = 0; i < list.getLength; i++) {
        DoubleList.push(element.value)
        element = element.next;
    }
}
createDoublyLinkedList(list)