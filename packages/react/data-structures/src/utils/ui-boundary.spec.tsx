// import React from "react";

// const ChildTest = ({keyProp}: { keyProp: string}) => <div key={keyProp}>Child</div>
// const sample = [
//     <ChildTest keyProp="test-1" />,
//     <ChildTest keyProp="test-a" />,
//     <ChildTest keyProp="test-4" />,
//     <div key="test-ffa">One Messed up tree</div>
// ];

// describe("React Boundaries", () => {
//     describe("containsOneType", () => {
//         it("should return boolean based on children in array", () => {
//             expect(containsOnlyOneType(sample, ChildTest)).toBeFalsy();
//             expect(containsOnlyOneType(sample.slice(0, -1), ChildTest)).toBeTruthy();
//         });
//     })
// });