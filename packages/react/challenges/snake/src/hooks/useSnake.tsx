import { useState, Dispatch, SetStateAction, useCallback } from "react";

import { GridState } from "../components/gridItem/gridItem";

/*
 This is a hook which contains our snake. This hook uses the useCallback hook to position the snake
 so 
*/
export const useSnake = (): [Record<string, number>[], Dispatch<SetStateAction<any>>, (grid: GridState[][]) => GridState[][]] => { 
    const [snake, moveSnake] = useState([] as Record<string, number>[]);
    const setProposedRows = useCallback((grid) => {
        let newGrid = grid; 
        snake.forEach(segment => {
            newGrid[segment.x][segment.y] = 1;
        })
        return newGrid
    }, [snake]);
    

    return [snake, moveSnake, setProposedRows]
}