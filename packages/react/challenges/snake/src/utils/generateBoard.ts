import { GridState } from "../components/gridItem/gridItem";

/*
* This function is used to generate our board data.
*   - Initial State will be 0
* Returns array of arrays
*/
// Bonus points: Convert to a hook and check if this is more or less performant
export function generate2dMatrix(dimension: number): GridState[][] {
    let grid = [];

    // Question: Why not use <= dimension? What happens to array iteration
    while (grid.length < dimension) {
        let row: GridState[] = [];
        for (let i = 0; i < dimension; i+= 1) {
            row.push(0);
        }
        grid.push(row);     
    } 

    return grid;
}