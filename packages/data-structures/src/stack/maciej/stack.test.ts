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


describe("Stack Data Structure", () => {

    let instance: Stack;

    beforeEach(() => {
        instance = new Stack();
    });

    it("should exist", () => {
        expect(instance).toBeDefined();
    });
    it("should enqueue items", () => {
        instance.unshift('First');

        expect(instance.showStack).toHaveLength(1);
        expect(instance.showStack[0]).toBe('First');
    });

    it("should store multiple items", () => {
        instance.unshift('First');
        instance.unshift('Second');

        expect(instance.showStack).toHaveLength(2);
        expect(instance.showStack[0]).toBe('Second');
        expect(instance.showStack[1]).toBe('First');
    });

    it("should dequeue items", () => {

        instance.unshift("Poe");
        instance.unshift("Allan");
        instance.unshift("Edgar");

        instance.shift();
        instance.shift();

        expect(instance.showStack).toHaveLength(1);
        expect(instance.showStack).toStrictEqual(["Poe"]);
    });
});
