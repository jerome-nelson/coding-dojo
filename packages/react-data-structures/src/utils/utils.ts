import { isValidElement, ReactNode, Children } from "react";

export function containsOnlyOneType(nodes: ReactNode, label: ReactNode) {
    let hasMultipleTypes = true;
    Children.forEach(nodes, node => {
        if (isValidElement(node) && node.type !== label) {
            hasMultipleTypes = false;
        }
    });
    return hasMultipleTypes;
}