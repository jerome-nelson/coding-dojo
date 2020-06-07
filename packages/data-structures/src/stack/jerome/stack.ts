export class Stack {

    private list: any[] = [];
    public top: number = 0;

    constructor(
        size: number
    ) {
        for (let i= 0; i < size; i+=1) {
            this.list[i] = null;
        }
    }

    insert(value: any) {
        if(this.top === this.list.length) {
            throw new Error('Stack Overflow!!!');
        }

        this.list[this.top] = value;
        this.top += 1;
    }

    delete() {

        if (this.top === 0) {
            throw new Error('Stack Underflow!!!');
        }

        const item = this.list[this.top - 1];
        this.list[this.top - 1] = null;
        this.top -= 1;
        return item;
    }

    get getList() {
        return this.list;
    }
}
