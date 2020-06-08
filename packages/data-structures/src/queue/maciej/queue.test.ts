// class Stack {
//     private Stack: any[] = [];

//     enqueue(value: string): void {
//         this.Stack.unshift(value);
//     }

//     dequeue(): void {
//         this.Stack.shift();
//     }

//     get showQueue(): any[] {
//         return this.Stack
//     }
// }
export class DataNodeQueue {
    value: unknown;
    next: DataNodeQueue | null;

    constructor(
        value: unknown
    ) {
        this.value = value;
        this.next = null;
    }

}

export class Queue {
    head: DataNodeQueue | null = null;
    tail: DataNodeQueue | null = null;

    enqueue(value: unknown) {
        const newNode = new DataNodeQueue(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            if (this.tail === null) return;
            let newElement = this.tail;
            newElement.next = newNode;
            this.tail = newNode;
            return;
        }
    }
    dequeue() {
        if (!this.head) {
            return;
        };

        let currentNode = this.head;
        let lastNode = this.head;
        while (currentNode.next !== null) {
            lastNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = lastNode;
        if (this.tail !== null) this.tail.next = null;
        return;
    }
    get showQueue() {
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


describe("Queue Data Structure", () => {

    let instance: Queue;

    beforeEach(() => {
        instance = new Queue();
    });

    it("should exist", () => {
        expect(instance).toBeDefined();
    });
    it("should enqueue items", () => {
        instance.enqueue('First');

        expect(instance.showQueue).toHaveLength(1);
        expect(instance.showQueue[0]).toBe('First');
    });

    it("should store multiple items", () => {
        instance.enqueue('First');
        instance.enqueue('Second');
        expect(instance.showQueue).toHaveLength(2);
        expect(instance.showQueue[0]).toBe('First');
        expect(instance.showQueue[1]).toBe('Second');
    });

    it("should dequeue items", () => {

        instance.enqueue("Poe");
        instance.enqueue("Allan");
        instance.enqueue("Edgar");

        instance.dequeue();
        instance.dequeue();

        expect(instance.showQueue).toHaveLength(1);
        expect(instance.showQueue).toStrictEqual(["Poe"]);
    });
});
