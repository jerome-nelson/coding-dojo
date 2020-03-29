import { SingularList, SingularListStructure } from "./linked-list";

let result: SingularListStructure;

describe("Singular Linked List", () => {

    beforeEach(() => {
        result = new SingularList();
    });

    describe("when adding an element", () => {
        it("should linked added Node to head reference if Node is the first value in the list", () => {
            result.add("Node value");
            expect(result.getHead!.value).toBe("Node value");
        });

        it("should linked added Node to tail reference if Node is the second value in the list", () => {
            result.add("Node value");

            expect(result.getHead!.value).toBe("Node value");
            expect(result.getTail).toBeNull();
   
            result.add("Node Tail Value");
   
            expect(result.getTail!.value).toBe("Node Tail Value");
        });

        it("should link previous element should point to element added", () => {
            result.add("Head value");
            result.add("Node Value");
            expect(result.getHead!.next!.value).toBe("Node Value");
        });
    });

    describe("when fetching the head", () => {
        it("should get the first Node in List", () => {
            result.add("First Value");
            result.add("Second Value");
            result.add("Third Value");

            expect(result.getHead!.value).toBe("First Value");
            expect(result.getHead!.next!.value).toBe("Second Value");
        });
        it("should return null if no Nodes in current data structure", () => {
            expect(result.getHead).toBeNull();
        });
    });

    describe("when finding values in a list", () => {
        it("should iterate through Linked List and return Node if value is found", () => {
            result.add("First Value");
            result.add("Second Value");

            expect(result.access("First Value")).toEqual({
                value: "First Value",
                next: {
                    value: "Second Value",
                    next: null
                }
            });
        });
        it("if value is not found then it should return the last element in structure", () => {
            result.add("Value 1");
            result.add("Value 2");
            result.add("Value 3");

            expect(result.access("Non-existent"))
                .toBeNull();
        });
        it("if there are no elements in structure, then error should be thrown", () => {
            expect(() => result.access("Find this value"))
                .toThrow("There are no elements to access! Add something");
        });
    });

    describe("when traversing a structure", () => {
        it("should return the value at the point specified", () => {
            result.add("First");
            result.add("Second");
            result.add("Third");
            
            expect(result.traverse(2)!.value).toBe("Second");
        });
        it("should return NULL if value doesn't exist", () => {
            expect(result.traverse(1)).toBeNull();
        });
    }); 

    describe("when deleting a node", () => {
        it("should link the previous element and next element together", () => {
            result.add("Value 1");
            result.add("Value to Delete");
            result.add("Value 3"); 

            result.delete("Value to Delete");
            expect(result.access("Value 1")!.next!.value).toBe("Value 3")
        });
    });
});