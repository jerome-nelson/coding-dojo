import React from "react";
import "./gridItem.css";

/*
* 0 - means Blank Square 
* 1 - means filled (by snake)
* 2 - means food is in square
*/
export type GridState = 0 | 1 | 2;

interface GridItem {
    itemState: GridState;
}

export const GridItem: React.SFC<GridItem> = ({ itemState }) => {
    return <div className={`gridItem ${itemState ? "hasSnake" : ""}`}>&nbsp;</div>
}