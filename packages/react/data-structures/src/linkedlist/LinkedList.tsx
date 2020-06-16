import React, { ReactElement, useState } from "react";

import { NodeUI } from "../node/node";
import { containsOnlyOneType } from "../utils/utils";

interface LinkedListProp {
    children: React.ReactNode
}

export const LinkedList = ({ children }: LinkedListProp) => {
    
    if (!containsOnlyOneType(children, NodeUI)) {
        throw new Error("Should contain only Nodes");
    }
    
    const childReflect = React.Children.toArray(children);
    const headNodes = childReflect.filter((node) => {
        return (node as ReactElement<any>).props.isHead
    });
    
    if (!headNodes.length) {
        throw new Error("Should contain a isHead prop");
    }

    const [generatedNodes, setNodes] = useState<React.ReactNode[]>(childReflect);
    const [textInput, setText] = useState('');
    
    return (
        <React.Fragment>
            <input name="add-node-text" aria-label="add-node-input" type="text" value={textInput} onChange={txt => {
                setText(txt.target.value);
            }}/>
            <button className="add-node" disabled={!setText.length} onClick={() => setNodes([...generatedNodes, <NodeUI key={Math.random()} value={textInput} />])}>Add Node</button>
            <button className="delete-node" disabled={generatedNodes.length === 0} onClick={() => setNodes(generatedNodes.slice(0, -1))}>Delete Node</button>
            <button className="reset-node" onClick={() => setNodes(childReflect)}>Reset Node</button>
            <div>{generatedNodes}</div>
        </React.Fragment>
    )
}
