import { Stack } from "./stack";

describe("Stacks", () => {
    it("should assign a fixed set on initialisation", () => {
        const newStack = new Stack(4);
        expect(newStack.getList.length).toBe(4);
        expect(newStack.top).toBe(0);
    });

    describe("when performing operations", () => {

        let stack: Stack;

        beforeEach(() => {
            stack = new Stack(4);
            stack.insert('A Value');
        })

        it("should update top on insert", () => {
            expect(stack.top).toBe(1);
        });

        it("should contain new value on insert", () => {
            expect(stack.top).toBe(1);
            expect(stack.delete()).toBe('A Value');
        });

        it("should return and remove old value from stack on delete", () => {
            stack.insert('A Value to Delete');
            expect(stack.top).toBe(2);
            expect(stack.delete()).toBe('A Value to Delete');
            expect(stack.top).toBe(1);
        });

        describe("edges cases", () => {
            it("should throw stack 'underflow' error when deleting from empty stack", () => {
                stack.delete();
                expect(() => stack.delete()).toThrowError('Stack Underflow!!');
            });
            it("should throw stack 'overflow' error when insertion is run on full stack", () => {
                const stack = new Stack(1);
                stack.insert('Safely added');
                expect(() => stack.insert('Should cause stack overflow')).toThrowError('Stack Overflow!!!');
            });
        });
    });
});