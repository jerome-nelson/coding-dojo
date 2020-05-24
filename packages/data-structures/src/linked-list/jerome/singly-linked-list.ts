import { DataNode, NodeInterface } from "../../node/jerome/node";

export interface SingularNodes extends NodeInterface {
    next?: NodeType;
}

export type NodeType = SingularNodes | null;
export interface SingleListStructure {
    readonly getHead: NodeType;
    readonly getTail: NodeType;
    access(value: unknown, element?: SingularNodes): NodeType;
    add(value: unknown): void;
    delete(value: unknown): void;
    traverse(value: number): NodeType;
}

enum E_STATE {
    ACCESS = "There are no elements to access! Add something!"
}

export class SingularList implements SingleListStructure {

    private head: NodeType;
    private tail: NodeType;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value: unknown) {
        const element = this._createNewElement(value);

        if (!this.head) {
            this.head = element;
            return;
        }
    
        if (!this.tail) {
            this.head.next = element;
            this.tail = element;
            return;
        }

        const lastNodeOrder = this._getOrder(value);
        if (!lastNodeOrder) {
            this.tail.next = element;
            this.tail = element;
            return;
        }

        const lastNode = this.traverse(lastNodeOrder);
        if(lastNode) {
            lastNode.next = element;
        }
    }

    delete(value: unknown) {
        const getNode = this.access(value);
        if (!getNode || getNode.value !== value) {
            return;
        }
                
        const temporaryMemoryRef = this._getOrder(value);
        
        if (temporaryMemoryRef) {
            const prevNode = this.traverse(temporaryMemoryRef - 1);
            const nextNode = this.traverse(temporaryMemoryRef + 1);

            if (prevNode && nextNode) {
                prevNode.next = nextNode;
            }
        }
    }

    access(value: unknown, element?: SingularNodes): NodeType {
        const start = element || this.head;

        if (!start) {
            throw new Error(E_STATE.ACCESS);
        }

        if (start.value === value) {
            return start;
        }

        return !start.next ? null : this.access(value, start.next);
    }

    traverse(steps: number, offset?: SingularNodes): NodeType {
        
        const element = offset || this.head;
        if (!element) {
            return null;
        }

        if (steps <= 1) {
            return element;
        }

        return !!element.next ? 
            this.traverse(steps - 1, element.next) : null;
    }

    get getHead() {
        return this.head;
    }

    get getTail() {
        return this.tail;
    }

    private _createNewElement(value: unknown) {
        return  Object.assign(
            { next: null }, 
            DataNode(value)
        );
    }

    private _getOrder(value: unknown, currentStep: number = 1, offset?: SingularNodes): number | null {
        const start = offset || this.head;
        
        if (!start) {
            return null;
        }

        if (start.value === value) {
            return currentStep;
        }
    
        return start.next ? this._getOrder(value, currentStep + 1, start.next) : null;
    }
}