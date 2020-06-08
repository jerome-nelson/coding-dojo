import { Stack } from './stack';

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
