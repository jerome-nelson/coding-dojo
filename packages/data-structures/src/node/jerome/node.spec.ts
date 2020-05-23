import { DataNode } from "./node";

describe("DataNode", () => {
    describe("when invoked", () => {
        it("should return value", () => {
            expect(DataNode(1).value).toBe(1);
        });

        describe("when no value is given", () => {
            it("should set value with undefined", () => {
                expect(DataNode().value).toBeUndefined();
            });
        });
    });
});