export interface Root {
    value: unknown;
    children: Root[];
}
export class Tree {
    root: Root | null = null;

    add(value: unknown, reference?: Root) {
        const newVertex = {
            value,
            children: []
        }

        if (!this.root) {
            this.root = newVertex;
            return newVertex;
        }
        if (this.root && !reference) this.root.children.push(newVertex);
        if (reference) {
            reference.children.push(newVertex);
        }
        return newVertex;
    }
}