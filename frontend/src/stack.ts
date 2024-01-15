interface IStack<I> {
    pop(): void;
    push(item: I): void;
    top(): I | undefined;
    empty(): boolean;
    size(): number;
    clear(): void;
}

export class Stack<I> implements IStack<I> {
    private data: I[] = [];

    pop(): void {
        this.data.pop();
    }

    push(item: I): void {
        this.data.push(item);
    }

    top(): I | undefined {
        return this.data[this.data.length - 1];
    }

    empty(): boolean {
        return this.data.length === 0;
    }

    size(): number {
        return this.data.length;
    }

    clear(): void {
        this.data = [];
    }
}