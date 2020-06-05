export class Queue {

    head: number | null = null;
    tail: number | null = null;
    private list: any[] = [];
    
    constructor(
        size: number
    ) {
        for (let i= 1; i < size; i+=1) {
            this.list[i] = null;
        }
    }

    enqueue(value: any) {
        if (!this.head || !this.tail) {
            this.head = 1;
            this.tail = 1;
            this.list[this.tail] = value;
            return;
        } 

            this.head += 1;
            this.list[this.head] = this.list[this.tail];
            this.list[this.tail] = value;
    }

    dequeue() {
        if (!this.head || !this.tail) {
            throw new Error('Queue is empty');
        }
        const current = this.list[this.head];
        this.head -= 1;
        return current;
    }

    get getList() {
        return this.list;
    }

    get showHead() {
        return this.head;
    }


    get showTail() {
        return this.tail;
    }
}

describe("Queues", () => {
    it("should assign a fixed set on initialisation", () => {
        const newQ = new Queue(4);
        expect(newQ.getList.length).toBe(4);
    });

    describe("when performing operations", () => {

        let queueInstance: Queue;

        beforeEach(() => {
            queueInstance = new Queue(4);
        });

        describe("Enqueue/Dequeue", () => {
            it("should add an item to data structure", () => {
                queueInstance.enqueue('Item 1');
                queueInstance.enqueue('Item 2');

                expect(queueInstance.dequeue()).toBe('Item 1');
                expect(queueInstance.dequeue()).toBe('Item 2');
            });
            it("if empty queue is dequeued error should be thrown", () => {
                expect(() => queueInstance.dequeue()).toThrowError('Queue is empty');
            });
        });
        describe("Head/Tail", () => {
            it("should return the current assigned key", () => {
                queueInstance.enqueue('Item 1');
                queueInstance.enqueue('Item 2');
                expect(queueInstance.showHead).toBe(2);
                expect(queueInstance.showTail).toBe(1);
            })
        })
    });
});