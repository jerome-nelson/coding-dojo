import { DataNode, NodeInterface } from "../node";

export interface LinkedPayload extends NodeInterface {
    next?: NextNodeType;
}

type NextNodeType = LinkedPayload | null;
export interface SingularListStructure {
    readonly getHead: NextNodeType;
    readonly getTail: NextNodeType;
    access(value: unknown, element?: LinkedPayload): NextNodeType;
    add(value: unknown): void;
    delete(value: unknown): void;
    traverse(value: number): NextNodeType;
}

enum E_STATE {
    ACCESS = "There are no elements to access! Add something!"
}

export class SingularList implements SingularListStructure {

    private head: NextNodeType;
    private tail: NextNodeType;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value: unknown) {
        const element = Object.assign(
            { next: null }, 
            DataNode(value)
        );

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

    access(value: unknown, element?: LinkedPayload): NextNodeType {
        const start = element || this.head;

        if (!start) {
            throw new Error(E_STATE.ACCESS);
        }

        if (start.value === value) {
            return start;
        }

        return !start.next ? null : this.access(value, start.next);
    }

    traverse(steps: number, offset?: LinkedPayload): NextNodeType {
        
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

    private _getOrder(value: unknown, currentStep: number = 1, offset?: LinkedPayload): number | null {
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