import React, { ReactElement } from "react";
import { containsOnlyOneType } from "../utils/utils";
import { NodeUI } from "../node/node";

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

    if(!headNodes.length) {
        throw new Error("Should contain a isHead prop");
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}