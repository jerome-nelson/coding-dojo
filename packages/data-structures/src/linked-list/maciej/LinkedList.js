
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(value) {
        let node = new Node(value);
        // If the list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        } else {
            let temp = this.tail;
            temp.next = node;
            this.tail = node;
        }
        return;
    }

    pop() {
        if (!this.head) return undefined;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            let secondToLastNode = this.head;
            while (currentNode.next) {
                secondToLastNode = currentNode;
                currentNode = currentNode.next;
            }
            secondToLastNode.next = null;
            this.tail = secondToLastNode;
        }
        return;
    }

    unshift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }
        return;
    }

    shift() {
        if (!this.head) return;
        let temp = this.head;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
        }
        return;
    }

    insert(index, value) {
        if (index < 0 || index > this.getLength) return;
        let node = new Node(value);

        if (index === this.getLength) return this.push(value);
        if (index === 0) return this.unshift(value);
        let current = this.head;
        let counter = 0;

        while (counter !== index - 1) {
            current = current.next;
            counter++;
        }
        node.next = current.next;
        current.next = node;
        return;
    }


    get getHead() {
        return this.head;
    }

    get getTail() {
        return this.tail;
    }

    get getLength() {
        let counter = 0;
        let current = this.head;
        if (current === null) return counter;
        if (current.next === null) return 1;
        while (current.next !== null) {
            counter++;
            current = current.next;
        }
        counter++;
        return counter;
    }
}

module.exports = LinkedList;

