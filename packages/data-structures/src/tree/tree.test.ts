import { Tree } from './tree'

describe("Tree Structure", () => {
    it("should exist", () => {
        expect(new Tree()).toBeDefined();
    });

    it("should have a root", () => {
        const call = new Tree();
        expect(call.root).toBeNull();
    });

    describe("tree operations", () => {

        let call: Tree;

        beforeEach(() => {
            call = new Tree();
            call.add("Hello");
        });

        it("should assign first vertex to root if root is not set", () => {
            expect(call.root && call.root.value).toBe('Hello');
        });
        it("should assign second and third vertexes as children of root", () => {
            call.add('Second');
            call.add('Third');

            expect(call.root && call.root.children).toHaveLength(2);
            expect(call.root && call.root.children).toEqual([
                {
                    value: "Second",
                    children: []
                },
                {
                    value: "Third",
                    children: []
                }
            ]);
        });
        it("should return a reference to added vertex which children can be added to", () => {
            const ref = call.add('Second');
            call.add('Third');
            call.add('Second Level Reference', ref);
            expect(call.root && call.root.children[0].children).toHaveLength(1);
            expect(call.root && call.root.children[0].children[0].value).toBe('Second Level Reference');
        });
    });
});