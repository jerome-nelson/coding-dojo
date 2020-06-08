export class DataNode {
    value: unknown;
    next: DataNode | null;

    constructor(
        value: unknown
    ) {
        this.value = value;
        this.next = null;
    }

}

export class Stack {
    head: DataNode | null = null;
    unshift(value: unknown) {
        if (!this.head) {
            this.head = new DataNode(value);
            return;
        };

        const newNode = new DataNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    shift() {
        if (!this.head) {
            return;
        };

        const node = this.head;
        this.head = node.next;
        return;
    }
    get showStack() {
        let array = [];
        let i = 0;
        let currentNode = this.head;
        if (currentNode && !currentNode.next) return [currentNode.value];
        while (currentNode) {
            array[i] = currentNode.value;
            currentNode = currentNode.next;
            i++;

        }


        return array;
    }
}