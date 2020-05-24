class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    push(value) {
        let node = new Node(value);
        // If the list is empty
        if (!this.head) {
          this.head = node;
          this.tail = node;
          this.length++;
          return;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return;
    }

    pop() {
        if(!this.head) return undefined;

        let temp = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return;
    }

    unshift(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return;
    }

    shift(){
        if(!this.head) return;
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.prev = null;
        }
        this.length--;
        return;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return;
        let node = new Node(value);
        
        if(index === this.length) return this.push(node);
        if(index === 0) return this.unshift(node);
        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }
        let temp = current;
        let prev = temp.prev;
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return;
    }

    remove(index){
        if(index < 0 || index > this.length) return;
   
        if(index === this.length) return this.pop();
        if(index === 0) return this.shift();
        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }
        let next = current.next;
        let prev = current.prev;
        prev.next = next;
        next.prev = prev;
        this.length--;
        return;
    }

    isEmpty(){ 
        return this.length === 0; 
    }

    printList(){
        const list =[];
        if(!this.head){
            return;
        }
        let temp = this.head;
        while(temp){
            list.push(temp.value);
            temp = temp.next
        }
        return list;
    }

  }

module.exports = DoublyLinkedList;

