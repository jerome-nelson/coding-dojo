import React, { useState, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import { GridItem } from "../gridItem/gridItem";
import { useSnake } from "../../hooks/useSnake";
import { generate2dMatrix } from "../../utils/generateBoard";
import "./gameBoard.css";

enum ArrowKeys {
    up = 'arrowup',
    down = 'arrowdown', 
    left = 'arrowleft', 
    right = 'arrowright'
}
interface GameBoardProps {
    size: number;
}

function directionReducer(state: Record<string, number>, action: { type: ArrowKeys }): Record<string, number> {
    switch (action.type) {
        case ArrowKeys.up:
            return {
                x: state.x - 1,
                y: state.y
            };
        case ArrowKeys.down:
            return {
                x: state.x + 1,
                y: state.y
            };
        case ArrowKeys.left:
            return {
                x: state.x,
                y: state.y - 1
            };
        case ArrowKeys.right:
            return {
                x: state.x,
                y: state.y + 1
            };
        default:
            return state;
    }
}

// Question: Can you explain the code below?
export const GameBoard: React.SFC<GameBoardProps> = ({ size }) => {
    const initialGrid = generate2dMatrix(size);
    const [rows, setRows] = useState(initialGrid);
    const [snake, moveSnake, setProposedRows] = useSnake();
    const [direction, setDirection] = useReducer(directionReducer, {
        x: 0,
        y: 0
    });

    useEffect(() => {
        moveSnake([...snake, direction]);
    }, [direction]);

    useEffect(() => {
        const newGrid = setProposedRows(rows)
        setRows([...newGrid]);
    }, [snake]);

    // This function is capturing keyboard clicks and passing them directly to reducer

    const triggerDirection = (event: KeyboardEvent) => {
        setDirection({ type: (event.key.toLowerCase() as ArrowKeys) })
    };
    window.addEventListener("keydown", triggerDirection, false);

    return (
        <ul className="gameBoard">
            {rows.map(row =>
                <li key={uuidv4()}>
                    {row.map(item => {
                        return <GridItem key={uuidv4()} itemState={item} />
                    })}
                </li>)}
        </ul>
    );
}