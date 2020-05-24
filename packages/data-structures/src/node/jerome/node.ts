// Node only has Value -> pointers are attached in data structure
export function DataNode(value: unknown = undefined): NodeInterface {
    return {
        value
    }
}

export interface NodeInterface {
    value: unknown;
}