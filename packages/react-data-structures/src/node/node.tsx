import React from "react";
import "./node.css";

interface NodeUI {
    isHead?: boolean;
    value: string;
}
//  node-ui-triangle, .node-ui-rectangle 
// Node Value can be anything
// Data is not optional
// Linking?
const Triangle = ({ value }: { value: string }) => {
    return (<div className="node-ui-triangle">
        <div>{value}</div>
    </div>)
}

const Square = ({ value }: { value: string }) => {
    return (<div className="node-ui-rectangle">
        <div>{value}</div>
    </div>)
}

export function NodeUI({ isHead, value }: NodeUI) {
    return <React.Fragment>
        {isHead ? <Triangle value={value} /> : <Square value={value} />}
    </React.Fragment>;
}