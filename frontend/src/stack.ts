interface IStack<T> {
    pop(): void;
    push(item: T): void;
    top(): T | null;
    empty(): boolean;
    size(): number;
    clear(): void;
}

export class Stack<T> implements IStack<T> {
    private data: T[] = [];

    pop(): void {
        this.data.pop();
    }

    push(item: T): void {
        this.data.push(item);
    }

    top(): T | null {
        return this.data[this.data.length - 1] ?? null;
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

    print(): void {
        console.log(JSON.stringify(this.data));
    }
}