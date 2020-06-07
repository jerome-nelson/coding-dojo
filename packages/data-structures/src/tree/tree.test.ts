// class Vertex{
//     value: unknown;
//     children : Vertex[];
// }
export interface Root {
    value: unknown;
    children: Root[];
}
export class Tree {
    root: Root | null = null;

    add(value: unknown, reference?: Root) {
        const newVertex = {
            value,
            children: []
        }

        if (!this.root) {
            this.root = newVertex;
            return newVertex;
        }
        if (this.root && !reference) this.root.children.push(newVertex);
        if (reference) {
            reference.children.push(newVertex);
        }
        return newVertex;
    }
}

/*
* Tree Structure
*
* Vertex {
*   value: unknown
*   children: Vertex[]   // Each vertex will point  
* }
*
*/

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