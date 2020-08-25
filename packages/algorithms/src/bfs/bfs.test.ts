// Input will be a adjacency list
export const expected = [
    [1,
        [3, null],
        [4, null]
    ],
    [2,
        [5,
            [6, null]
        ]
    ]
];

const breadFirst = (nodes: any): any => {

    const output = {
        root: {}
    };


    // 1. Iterate through array
    // 2. Only take first child
    // i. First child is ALWAYS the first item in the subarray
    // i.e list[0][0] (will always be direct descendant)

    (output.root as any).left = {
        value: nodes[0][0]
    };
    (output.root as any).right = {
        value: nodes[1][0]
    }

    return output;

}

// Output should be a multi-dimensional object

describe("BFS", () => {
    it("Creates a root", () => {
        expect(breadFirst(expected).root).toBeTruthy()
    });
    // it("should create a tree-like structure representing the graphical list", () => {
    //     expect(JSON.stringify(breadFirst(expected))).toEqual(JSON.stringify(mock));
    // });
});