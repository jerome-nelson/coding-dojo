import { generate2dMatrix } from "./generateBoard";

describe("generate2dMatrix", () => {
    it("should create a 2 dimensional array (array of arrays), with 0 state for each cell", () => {
        const expected = [
            [0, 0], [0, 0]
        ]
        expect(generate2dMatrix(2)).toStrictEqual(expected)
    });
});